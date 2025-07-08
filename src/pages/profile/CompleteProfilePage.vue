<template>
  <q-page class="column items-center justify-center q-pa-md">
    <div v-if="isReady" class="q-pa-md" style="max-width: 450px; width: 100%;">
      <h5 class="q-my-md text-center">Complete seu Cadastro</h5>
      <p class="text-center text-grey-8 q-mb-lg">
        Precisamos de mais algumas informações para finalizar seu perfil.
      </p>
      <q-form @submit.prevent="updateProfile" @reset="onReset" class="q-gutter-md">
        <!-- Form inputs remain the same -->
        <q-input
          filled
          v-model="name"
          label="Nome Completo *"
          lazy-rules
          :rules="[val => val && val.length > 0 || 'O nome é obrigatório']"
        />
        <q-input
          filled
          v-model="nickname"
          label="Apelido"
        />
        <q-input
          filled
          readonly
          v-model="email"
          label="E-mail *"
        />
        <q-input
          filled
          v-model="phone"
          label="Telefone (WhatsApp)"
          mask="(##) #####-####"
          unmasked-value
        />
        <div class="column q-gutter-y-md q-mt-lg">
          <q-btn label="Salvar e Continuar" type="submit" color="primary" unelevated size="lg" :loading="isSaving" />
          <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
    <div v-else>
        <q-spinner-dots color="primary" size="40px" />
        <p>Verificando seu perfil...</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { api, isAxiosError } from 'src/boot/axios';

const instance = getCurrentInstance();
const { proxy } = instance || {};
const keycloak = proxy?.$keycloak;
const $q = useQuasar();
const router = useRouter();

const name = ref('');
const nickname = ref('');
const email = ref('');
const phone = ref('');
const isSaving = ref(false);
const isReady = ref(false); // New state to control when the form is shown

onMounted(async () => {
  if (keycloak?.authenticated && keycloak.tokenParsed) {
    const userInfo = keycloak.tokenParsed;
    name.value = userInfo.name || '';
    email.value = userInfo.email || '';
    nickname.value = userInfo.preferred_username || '';

    // --- FIX: Call the status endpoint to ensure the user is provisioned ---
    try {
      // This GET request will create the user on the backend if they don't exist.
      await api.get('/users/me/status');
      isReady.value = true; // Show the form only after the user is confirmed to exist.
    } catch (error) {
       console.error("Falha ao verificar o status do usuário:", error);
       $q.notify({ color: 'negative', message: 'Não foi possível carregar os dados do perfil.' });
       // Optional: redirect to an error page or back to login
    }
    // --------------------------------------------------------------------

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

const onReset = () => { /* ... unchanged ... */ };

const updateProfile = async () => {
  isSaving.value = true;
  const profileData = {
    name: name.value,
    nickname: nickname.value,
    phone: phone.value,
  };

  try {
    // This call will now succeed because the user is guaranteed to exist.
    await api.put('/users/me', profileData);
    $q.notify({
      color: 'positive',
      icon: 'cloud_done',
      message: 'Perfil salvo com sucesso!'
    });
    router.push('/dashboard').catch(err => {
      console.error('Falha na navegação:', err);
    });
  } catch (error) {
    console.error('Erro ao atualizar o perfil:', error);
    let errorMessage = 'Não foi possível salvar seu perfil. Tente novamente.';
    if (isAxiosError(error)) {
      errorMessage = error.response?.data?.message || errorMessage;
    }
    $q.notify({
      color: 'negative',
      icon: 'error',
      message: errorMessage
    });
  } finally {
    isSaving.value = false;
  }
};
</script>
