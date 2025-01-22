<script setup>
import { RouterView } from 'vue-router';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import Nav from './components/layouts/home/Nav.vue';
import Footer from './components/layouts/home/Footer.vue';


const store = useStore();
const isSleeping = computed(() => store.getters.getIsSleeping);

const theme = ref("light");

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme.value);
};

</script>

<template>
  <div>
    <button @click="toggleTheme">Alternar Tema</button>
  </div>
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
