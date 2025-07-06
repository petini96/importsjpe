// src/boot/keycloak.ts
import { boot } from 'quasar/wrappers';
import keycloak from 'src/services/keycloak';

export default boot(async ({ app, router }) => {
  try {
    const authenticated = await keycloak.init({
      onLoad: 'check-sso', //single sign-on (sessão única, sempre precisar logar novamente)
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html' // página do kc para verifica sessão
    });

    app.config.globalProperties.$keycloak = keycloak; // registra keycloak como global

    if (authenticated) {
      if (router.currentRoute.value.path === '/login') {
        // Adiciona um .catch para tratar a promessa
        router.push('/').catch(err => {
          console.error('Falha ao redirecionar após login:', err);
        });
      }
    }
    
    console.log(authenticated ? 'Usuário autenticado' : 'Usuário não autenticado');

  } catch (error) {
    console.error('Falha ao inicializar o Keycloak', error);
  }
});