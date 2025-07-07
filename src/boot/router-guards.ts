// src/boot/router-guards.ts
import { boot } from 'quasar/wrappers';
import axios from 'axios';

let profileStatusChecked = false;

export default boot(({ router, app }) => {
  router.beforeEach(async (to, from, next) => {
    const keycloak = app.config.globalProperties.$keycloak;

    if (to.meta.requiresAuth && !keycloak.authenticated) {
      return keycloak.login({ redirectUri: window.location.origin + to.fullPath });
    }

    if (keycloak.authenticated && !profileStatusChecked && to.path !== '/complete-profile') {
      try {
        const response = await axios.get('/api/users/me/status', {
          headers: { Authorization: `Bearer ${keycloak.token}` }
        });
        
        profileStatusChecked = true;
        
        if (!response.data.profileComplete) {
          return next({ path: '/complete-profile' });
        }
      } catch (error) {
        console.error('Falha ao verificar status do perfil:', error);
        // Decida o que fazer em caso de erro. Talvez deslogar o usuário.
        void keycloak.logout(); // <-- CORRIGIDO AQUI
        return;
      }
    }

    next();
  });
});