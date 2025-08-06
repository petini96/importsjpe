// src/boot/keycloak.ts
import { boot } from 'quasar/wrappers';
import keycloak from 'src/services/keycloak';

export default boot(async ({ app }) => {
  try {
    console.log('[BOOT] Keycloak: Iniciando inicialização...');

    const authenticated = await keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    });

    console.log(`[BOOT] Keycloak: Inicialização concluída. Autenticado: ${authenticated}`);

    app.config.globalProperties.$keycloak = keycloak;

  } catch (error) {
    // Este catch pode não pegar um "hang", mas é bom ter.
    console.error('[BOOT] Keycloak: Falha CRÍTICA ao inicializar o Keycloak', error);
  }
});
