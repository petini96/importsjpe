import { boot } from 'quasar/wrappers';
import { api } from './axios';

let profileStatusChecked = false;

export default boot(({ router, app }) => {
  console.log('[BOOT] Router Guards: Configurando o hook beforeEach.');

  router.beforeEach(async (to, from, next) => {
    console.log(`[ROUTER] Navegando para: ${to.path}. Profile verificado: ${profileStatusChecked}`);

    const keycloak = app.config.globalProperties.$keycloak;

    if (!keycloak) {
      console.error('Keycloak não inicializado.');
      return next(false);
    }

    const isAuthenticated = keycloak.authenticated;

    // Se a rota requer autenticação e o usuário não está logado, envia para o login.
    if (to.meta.requiresAuth && !isAuthenticated) {
      return keycloak.login({ redirectUri: window.location.origin + to.fullPath });
    }

    // Se o usuário está logado e tenta acessar o login, redireciona para o dashboard.
    if (isAuthenticated && to.path === '/login') {
      return next({ path: '/dashboard' });
    }
    
    // Se a rota não exige autenticação, permite a passagem.
    if (!to.meta.requiresAuth) {
      return next();
    }
    
    // --- Lógica para usuários autenticados ---
    if (isAuthenticated) {
      // Passo 1: Verificar se o perfil está completo (apenas uma vez por sessão)
      let isProfileComplete = profileStatusChecked;
      if (!profileStatusChecked) {
        try {
          const response = await api.get('/users/me/status');
          isProfileComplete = response.data?.isProfileComplete;
          profileStatusChecked = true; // Marca como verificado para não repetir a chamada
        } catch (error) {
          console.error('Falha ao verificar status do perfil. Fazendo logout.', error);
          await keycloak.logout({ redirectUri: window.location.origin });
          return; // Interrompe a navegação
        }
      }

      // Se o perfil não está completo, força o redirecionamento
      if (!isProfileComplete && to.path !== '/complete-profile') {
        return next({ path: '/complete-profile' });
      }

      // Passo 2: Verificar se a rota exige um papel específico
      const requiredRole = to.meta.requiredRole as string | undefined;
      if (requiredRole) {
        // O método `hasResourceRole` verifica os papéis do client.
        // O `hasRealmRole` verifica os papéis do realm.
        if (keycloak.hasResourceRole(requiredRole) || keycloak.hasRealmRole(requiredRole)) {
          return next(); // Tem o papel, acesso permitido!
        } else {
          // Não tem o papel, acesso negado. Redireciona.
          console.warn(`[ROUTER] Acesso negado. Rota ${to.path} requer o papel: ${requiredRole}`);
          console.log({ type: 'negative', message: 'Você não tem permissão para acessar esta página.' });
          return next({ path: '/dashboard' }); // Ou para uma página '/403-unauthorized'
        }
      }
      
      // Se chegou até aqui, o usuário está autenticado, o perfil está ok e a rota não exige papel específico.
      return next();
    }
    
    // Fallback final
    return next();
  });
});