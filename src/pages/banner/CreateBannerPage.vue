<template>
  <q-page class="column items-center justify-center q-pa-md">
    <div class="q-pa-md full-width" style="max-width: 500px;">
  
      <q-form 
        @submit="onSubmit" 
        @reset="onReset" 
        class="q-gutter-md"
      >
        <q-stepper 
          v-model="step" 
          ref="stepper" 
          animated 
          done-color="secondary" 
          active-color="primary"
          inactive-color="secondary"
          :vertical="$q.screen.lt.md"
          style="width: 100%;"
        >
          <q-step 
            :name="1" 
            title="Banner Desktop" 
            icon="create_new_folder" 
            :done="step > 1"
          >

            <div>
              <q-img 
                :src="photoUrl" 
                spinner-color="white" 
                style="height: 140px; width: 100%" 
              />
            </div>

            <q-file 
              filled 
              bottom-slots 
              v-model="photo" 
              label="Banner" 
              counter 
              @update:model-value="updateFile" 
              :rules="[
                (val) => val && val.size < 2 * 1024 * 1024 || 'O arquivo deve ter no máximo 2MB',
                (val) => val && ['image/jpeg', 'image/png', 'image/gif'].includes(val.type) || 'Apenas imagens (JPEG, PNG, GIF) são permitidas'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop.prevent />
              </template>
              <template v-slot:hint>
                Selecione a foto
              </template>
            </q-file>
          </q-step>
          
          <q-step 
            :name="2" 
            title="Banner Mobile" 
            icon="create_new_folder" 
            :done="step > 2"
          >

            <div>
              <q-img 
                :src="photoMobileUrl" 
                spinner-color="white" 
                style="height: 140px; width: 100%" 
              />
            </div>

            <q-file 
              filled 
              bottom-slots 
              v-model="photoMobile" 
              label="Banner" 
              counter 
              @update:model-value="updateMobileFile" 
              :rules="[
                (val) => val && val.size < 2 * 1024 * 1024 || 'O arquivo deve ter no máximo 2MB',
                (val) => val && ['image/jpeg', 'image/png', 'image/gif'].includes(val.type) || 'Apenas imagens (JPEG, PNG, GIF) são permitidas'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop.prevent />
              </template>
              <template v-slot:hint>
                Selecione a foto
              </template>
            </q-file>
          </q-step>

          <q-step 
            :name="3" 
            title="Descrição" 
            icon="settings" 
            :done="step > 3"
          >
            <q-input 
              filled v-model="name" 
              label="Título *" 
              hint="Descreva qual o título" 
              lazy-rules
              :rules="[
                (val: string | any[]) => val && val.length > 0 || 'Você precisa definir o título'
              ]" 
            />

            <q-input 
              filled 
              v-model="description" 
              label="Descrição *" 
              hint="Descreva qual o título" 
              lazy-rules
              :rules="[
                (val: string | any[]) => val && val.length > 0 || 'Você precisa definir o título'
              ]" 
            />

            <q-input 
              filled 
              type="number" 
              v-model="order" 
              label="Ordem *" 
              lazy-rules 
              :rules="[
                (val: string | null) => val !== null && val !== '' || 'Selecione qual a ordem de mostragem',
                (val: number) => val > 0 && val < 100 || 'Please type a real order'
              ]" 
            />

            <q-toggle 
              v-model="accept" 
              label="Eu aceito usar essas imagens" 
            />

            <div v-if="step === 3 && dataIsFilled()">
              <q-btn label="Salvar" type="submit" color="primary" />
              <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn 
                v-if="step < 3"
                @click="stepper?.next()" 
                color="secondary" 
                :label="'Continuar'" 
              />

              <q-btn 
                v-if="step > 1 && !dataIsFilled()" 
                flat 
                color="secondary" 
                @click="stepper?.previous()" 
                label="Voltar" 
                class="q-ml-sm" 
              />
            </q-stepper-navigation>
          </template>
          
        </q-stepper>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar, type QStepper } from 'quasar'
import { ref } from 'vue'

const $q = useQuasar()
const stepper = ref<QStepper | null>(null);

const step = ref(1)
const name = ref<string | null>(null)
const description = ref<string | null>(null)
const order = ref<number | null>(null)
const photo = ref(null);
const photoUrl = ref('')
const photoMobile = ref(null);
const photoMobileUrl = ref('')
const accept = ref<boolean>(false)

const dataIsFilled = () => {
  return photo.value && photoMobile.value && name.value && description.value && order.value && accept.value
}

const updateMobileFile = () => {
  if (!photoMobile.value) {
    photoMobileUrl.value = '';
    return;
  }

  const file = photoMobile.value as File;
  if (file instanceof File) {
    const reader = new FileReader();
    reader.onload = () => {
      photoMobileUrl.value = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const updateFile = () => {
  if (!photo.value) {
    photoUrl.value = '';
    return;
  }

  const file = photo.value as File;
  if (file instanceof File) {
    const reader = new FileReader();
    reader.onload = () => {
      photoUrl.value = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const onSubmit = () => {
  if (!accept.value) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Você precisa aceitar os termos primeiramente'
    })
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Sucesso ao salvar'
    })
  }
}

const onReset = () => {
  photo.value = null
  photoMobile.value = null
  name.value = null
  description.value = null
  order.value = null
}
</script>