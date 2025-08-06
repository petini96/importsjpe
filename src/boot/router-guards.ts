// src/boot/router-guards.ts

import { boot } from "quasar/wrappers";
import { api } from "./axios";

let profileStatusChecked = false;

export default boot(({ router, app }) => {
  console.log('[BOOT] Router Guards: Configurando o hook beforeEach.');

  router.beforeEach(async (to, from, next) => {
    console.log(`[ROUTER] Navegando para: ${to.path}. Profile verificado: ${profileStatusChecked}`);

    // A verificação do initPromise foi REMOVIDA daqui.
    // Neste ponto, keycloak.init() já foi concluído graças à ordem dos boot files.
    const keycloak = app.config.globalProperties.$keycloak;

    // Se por algum motivo o keycloak não foi injetado, saia para evitar erros.
    if (!keycloak) {
      console.error("Keycloak não inicializado, verifique a ordem dos boot files.");
      // Você pode querer redirecionar para uma página de erro aqui
      return next(false); 
    }

    const isAuthenticated = keycloak.authenticated;

    // CASO 1: Usuário está autenticado e na página de login.
    if (isAuthenticated && to.path === '/login') {
      return next({ path: '/dashboard' });
    }

    // CASO 2: A rota requer autenticação e o usuário não está logado.
    if (to.meta.requiresAuth && !isAuthenticated) {
      return keycloak.login({ redirectUri: window.location.origin + to.fullPath });
    }

    // CASO 3: Usuário está autenticado, mas o status do perfil ainda não foi verificado.
    if (isAuthenticated && !profileStatusChecked && to.meta.requiresAuth && to.path !== '/complete-profile') {
      try {
        const response = await api.get('/users/me/status');
        profileStatusChecked = true; 

        if (!response.data?.isProfileComplete) {
          return next({ path: '/complete-profile' });
        }
        
        return next();

      } catch (error) {
        console.error('Falha ao verificar status do perfil. Fazendo logout.', error);
        await keycloak.logout({ redirectUri: window.location.origin });
        return;
      }
    }
    
    return next();
  });
});