<template>
  <div class="full-height full-width">
    <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      
      <!-- nav section -->
      <NavLayout /> 
      
      <q-page-container>
        <q-page >
          <TabMenu :tab-props="[
            { name: 'about', label: 'Sobre' },
            { name: 'menu', label: 'Cardápio' },
            { name: 'gallery', label: 'Galeria' },
            { name: 'customer', label: 'Clientes' }
          ]" />
          <router-view />
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
        </q-page>
      </q-page-container>

    </q-layout>
  </div> 
</template>

<script setup lang="ts">
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import TabMenu from 'src/components/generics/tab/TabMenu.vue';
</script>
