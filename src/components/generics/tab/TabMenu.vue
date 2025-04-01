<template>
  <div class="m-0 p-0" style="width: 100%">
    <q-tabs 
      v-model="tab" 
      no-caps 
      outside-arrows 
      mobile-arrows 
      class="bg-primary text-white shadow-2 font-primoto-pro"
      @update:model-value="scrollToSection"
    >
      <q-tab v-for="tabProp in tabProps"
        :key="tabProp.name"
        :name="tabProp.name" 
        :label="tabProp.label" 
      />
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import type { TabMenuProps } from './TabProps';

const { tabProps } = defineProps<{
  tabProps: TabMenuProps[];
}>();

const tab = ref<string>(''); 
  const scrollToSection = (newTab: string) => {
  console.log('scrollToSection chamado com aba:', newTab);
  const element = document.getElementById(newTab);
  if (element) {
    console.log('Elemento encontrado, rolando para:', newTab);
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.log('Elemento não encontrado para a aba:', newTab);
  }
  
  const app = getCurrentInstance();
  const gtag = app?.appContext.config.globalProperties.$gtag;
  const tabLabel = tabProps.find(tab => tab.name === newTab)?.label || newTab;

  console.log('gtag:', gtag);
  if (gtag) {
    console.log('Enviando evento Clique para o GA:', {
      event_category: 'Navegação',
      event_label: `Aba: ${tabLabel}`,
      value: 1
    });
    gtag.event('Clique', {
      event_category: 'Navegação',
      event_label: `Aba: ${tabLabel}`,
      value: 1
    });
  } else {
    console.log('gtag não está definido! Verifique a configuração do vue-gtag.');
  }
};
</script>

<style scoped>
.section {
  height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 20px;
}
</style>