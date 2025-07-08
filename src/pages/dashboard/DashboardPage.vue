<template>
  <q-page class="column items-center justify-center q-pa-md">
    {{ name ? `Bem-vindo, ${name}!` : 'Carregando...' }}
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

onMounted(() => {
  if (keycloak?.authenticated && keycloak.tokenParsed) {
    name.value = keycloak.tokenParsed.name || keycloak.tokenParsed.preferred_username || 'Usuário';
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
