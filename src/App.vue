<script setup lang="ts">

import { RouterView } from 'vue-router';
import { computed } from 'vue';
import { useLayoutConfigStore } from './store/modules/layout-config-store';
import Nav from './components/layouts/home/Nav.vue';
import Footer from './components/layouts/home/Footer.vue';

const layoutConfigStore = useLayoutConfigStore();
layoutConfigStore.setIsSleeping(true)

const isSleeping = computed(() => layoutConfigStore.layoutConfig?.isSleeping);

</script>

<template>
  <Nav />
  <main :class="{ active: isSleeping, 'desactive': !isSleeping }">
    <RouterView />
  </main>
  <Footer />
</template>

<style>
body {
  background-color: var(--background-color);
  color: var(--text-color);
}

button {
  background-color: var(--primary-color);
  color: var(--text-color);
  border: 1px solid var(--secondary-color);
}
</style>
