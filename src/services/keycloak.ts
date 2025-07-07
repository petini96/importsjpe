import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: "http://localhost:8082",
  realm: "localhost",
  clientId: "quasar-app"
});

export default keycloak;