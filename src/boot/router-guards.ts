// src/boot/router-guards.ts
import { boot } from 'quasar/wrappers';

export default boot(({ router, app }) => {
  router.beforeEach((to, from, next) => {
    const keycloak = app.config.globalProperties.$keycloak;

    if (to.meta.requiresAuth && !keycloak.authenticated) {
      // Adiciona um .catch para tratar a promessa
      keycloak.login({ redirectUri: window.location.origin + to.fullPath })
        .catch(err => {
          console.error('Falha ao iniciar o processo de login:', err);
        });
    } else {
      next();
    }
  });
});