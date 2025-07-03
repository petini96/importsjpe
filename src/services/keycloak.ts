import Keycloak from 'keycloak-js';

// Configura a instância do Keycloak
const keycloak = new Keycloak({
  url: 'http://localhost:8082', // URL do seu servidor Keycloak
  realm: 'localhost',      // O realm que você criou
  clientId: 'quasar-app'      // O client que você criou
});

export default keycloak;