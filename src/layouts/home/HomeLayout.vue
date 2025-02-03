<template>
  <NavLayout />
  <router-view />
  <FooterLayout />
</template>

<script setup lang="ts">
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import FooterLayout from 'src/components/layouts/home/FooterLayout.vue';
</script>
