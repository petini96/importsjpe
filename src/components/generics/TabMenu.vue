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
        <q-tab name="about" label="Sobre" />
        <q-tab name="mini-products" label="Cardápio" />
        <q-tab name="galerry" label="Galeria" />
        <q-tab name="customer" label="Clientes" />
        <q-tab name="contact" label="Contato" />
      </q-tabs>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const tab = ref('about');
  
  const scrollToSection = (newTab: string) => {
    const element = document.getElementById(newTab);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  </script>
  
  <style scoped>
  .section {
    height: 100vh; /* Apenas para exemplo, ajuste conforme necessário */
    padding: 20px;
    background-color: #f5f5f5;
    margin-top: 20px;
  }
  </style>