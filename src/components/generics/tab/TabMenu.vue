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
import { ref } from 'vue';
import type { PropType } from 'vue';
import type { TabMenuProps } from './TabProps';

defineProps({
  tabProps: {
    type: Object as PropType<TabMenuProps[]>,
    required: true,
  }
});
const tab = ref<string>(''); 

const scrollToSection = (newTab: string) => {
  const element = document.getElementById(newTab);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>

<style scoped>
.section {
  height: 100vh;
  /* Apenas para exemplo, ajuste conforme necessário */
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 20px;
}
</style>