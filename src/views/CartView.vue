<script setup lang="ts">
 import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const cartProducts = computed(() => {
  console.log(store.getters.getCartProducts);
  return store.getters.getCartProducts;
});

</script>

<template>
  <section>
    <p>Sacola!</p>
    {{ cartProducts }}
  </section>
</template>

<style scoped>
</style>
