<template>
  <q-page class="column items-center justify-center q-pa-md">
    <div class="q-pa-md" style="max-width: 400px; width: 100%;">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="email"
          label="Digite seu e-mail *"
          hint="Digite seu e-mail"
          lazy-rules
          :rules="[val => val && val.length > 0 || 'Digite seu e-mail']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Sua senha *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Digite sua senha',
            // Note: This password rule is not typical.
            // You might want to adjust it to check for length or complexity.
            val => val.length > 0 || 'A senha deve ser válida'
          ]"
        />

        <q-toggle v-model="accept" label="Eu aceito os termos" />

        <div class="column q-gutter-y-md">
          <q-btn label="Submit" type="submit" color="primary" unelevated />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>

        <q-separator class="q-my-md" />

        <q-btn
          unelevated
          align="center"
          class="full-width"
          @click="loginWithGoogle"
        >
          <div class="row items-center no-wrap">
            <q-icon left>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                <path fill="#34A853" d="M6.306 14.691L11.961 19.346C10.743 21.246 10 23.511 10 26c0 2.481.743 4.753 1.961 6.654l-5.657 5.657C3.053 34.046 1 29.268 1 24c0-5.268 2.053-10.046 5.306-13.309z"/>
                <path fill="#FBBC05" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.382 5.373C9.405 41.042 16.121 44 24 44z"/>
                <path fill="#EA4335" d="M43.611 20.083H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-2.715 0-5.211-.909-7.183-2.425l-6.19 5.238C14.14 39.023 18.834 42 24 42c8.718 0 16.34-5.556 18.995-13.333C43.862 26.65 44 25.341 44 24c0-1.341-.138-2.65-.389-3.917z"/>
              </svg>
            </q-icon>
            <div class="text-center">
              Fazer login com Google
            </div>
          </div>
        </q-btn>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue';
import { useQuasar } from 'quasar';

// --- Configuração da Instância ---
const instance = getCurrentInstance();
const { proxy } = instance || {};
const keycloak = proxy?.$keycloak;
const $q = useQuasar();

onMounted(() => {
  if (keycloak?.authenticated) {
    console.log('Usuário está autenticado!');
    console.log('Token de acesso:', keycloak.token);
    console.log('Dados do usuário:', keycloak.tokenParsed);
  }
});

// --- Variáveis Reativas do Formulário ---
const email = ref('');
const password = ref('');
const accept = ref(false);

// --- Métodos do Formulário ---
const onSubmit = () => {
  if (!accept.value) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Você precisa aceitar os termos e condições'
    });
    return;
  }
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Enviado'
  });
};

const onReset = () => {
  email.value = '';
  password.value = '';
  accept.value = false;
};

// --- Métodos de Autenticação ---
const loginWithGoogle = () => {
  // ADICIONADO: Cláusula de guarda para verificar se o keycloak existe
  if (!keycloak) {
    console.error('Instância do Keycloak não encontrada!');
    $q.notify({
      color: 'negative',
      message: 'Erro de configuração. Não foi possível iniciar o login.'
    });
    return; // Sai da função se o keycloak não estiver disponível
  }

  // Se o código chegar aqui, o TypeScript sabe que 'keycloak' não é indefinido.
  keycloak.login({ idpHint: 'google' }).catch(err => {
    console.error('Falha ao tentar fazer login:', err);
    $q.notify({
      color: 'negative',
      message: 'Ocorreu um erro ao tentar fazer o login com o Google.'
    });
  });
};
</script>