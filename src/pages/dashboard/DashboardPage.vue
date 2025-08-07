<template>
  <q-page class="column items-center justify-center q-pa-md">
    {{ name ? `Bem-vindo, ${name}!` : 'Carregando...' }}
    <p>Suas roles: {{ userRoles.join(', ') }}</p>

    <RouterLink class="navbar-brand" to="/">
      Voltar para o Início
    </RouterLink>
  </q-page>
</template>

<script setup lang="ts">
// FIX (vue/multi-word-component-names):
// This error is resolved by renaming the file to `DashboardPage.vue`.
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useQuasar } from 'quasar';

const instance = getCurrentInstance();
const { proxy } = instance || {};
const keycloak = proxy?.$keycloak;
const $q = useQuasar();

const name = ref('');
const userRoles = ref<string[]>([]);

onMounted(() => {

  if (keycloak?.authenticated && keycloak.tokenParsed) {
    name.value = keycloak.tokenParsed.name || keycloak.tokenParsed.preferred_username || 'Usuário';
    let roles: string[] = [];
    if (keycloak.tokenParsed.realm_access?.roles) {
      roles = [...roles, ...keycloak.tokenParsed.realm_access.roles];
    }
    if (keycloak.tokenParsed.resource_access?.['quasar-app']?.roles) {
      roles = [...roles, ...keycloak.tokenParsed.resource_access['quasar-app'].roles];
    }
    userRoles.value = roles;
  } else {
    $q.notify({
      color: 'negative',
      message: 'Usuário não autenticado. Redirecionando para login...',
      icon: 'warning'
    });
    keycloak?.login().catch(err => {
      console.error("Falha ao redirecionar para o login:", err);
      $q.notify({ color: 'negative', message: 'Ocorreu um erro ao tentar fazer login.' });
    });
  }
});
</script>
