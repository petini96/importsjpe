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
  const element = document.getElementById(newTab);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  
  const app = getCurrentInstance();
  const gtag = app?.appContext.config.globalProperties.$gtag;
  const tabLabel = tabProps.find(tab => tab.name === newTab)?.label || newTab;

  if (gtag) {
    gtag.event('Clique', {
      event_category: 'Navegação',
      event_label: `Aba: ${tabLabel}`,
      value: 1
    });
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