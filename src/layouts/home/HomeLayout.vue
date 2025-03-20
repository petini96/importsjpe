<template>
  <div class="full-height full-width">
    <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      
      <!-- nav section -->
      <NavLayout />

      

      <q-page-container>
        <q-page >
          <TabMenu />
          <router-view />
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
        </q-page>
      </q-page-container>

      <FooterLayout />
    </q-layout>
  </div> 
</template>

<script setup lang="ts">
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import FooterLayout from 'src/components/layouts/home/FooterLayout.vue';
import TabMenu from 'src/components/generics/TabMenu.vue';
</script>
