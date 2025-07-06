import Keycloak from 'keycloak-js';

const KEYCLOAK_URL = `${process.env.KEYCLOAK_URL}`;
const KEYCLOAK_REALM = `${process.env.KEYCLOAK_REALM}`;
const KEYCLOAK_CLIENT_ID = `${process.env.KEYCLOAK_CLIENT_ID}`;

const keycloak = new Keycloak({
  url: KEYCLOAK_URL,
  realm: KEYCLOAK_REALM,
  clientId: KEYCLOAK_CLIENT_ID
});

export default keycloak;