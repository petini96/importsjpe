import { boot } from 'quasar/wrappers';
// FIX: Use 'import type' for imports that are only used as types.
import axios, { isAxiosError } from 'axios';
import type { AxiosInstance } from 'axios';
import type Keycloak from 'keycloak-js';

// For the TypeScript linter to understand that `$api` and `$keycloak` exist on Vue components
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: AxiosInstance;
    $keycloak: Keycloak;
  }
}

const getBaseUrl = () => {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:8080';
  const url = backendUrl.startsWith('http') ? backendUrl : `http://${backendUrl}`;
  return `${url}/api`;
};

const api = axios.create({
  baseURL: getBaseUrl()
});

export default boot(({ app }) => {
  api.interceptors.request.use(config => {
    const keycloak: Keycloak = app.config.globalProperties.$keycloak;

    if (keycloak && keycloak.authenticated) {
      config.headers.Authorization = `Bearer ${keycloak.token}`;
    }
    return config;
  }, error => {
    return Promise.reject(new Error(error));
  });

  app.config.globalProperties.$api = api;
});

export { api, isAxiosError };
