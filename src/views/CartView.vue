<script setup lang="ts">
 import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import CartComponent from '../components/CartComponent.vue';

const store = useStore();

const cartProducts = computed(() => {
  console.log(store.getters.getCartProducts);
  return store.getters.getCartProducts;
});

</script>

<template>
  <section>
    <CartComponent />
  </section>
</template>

<style scoped>
</style>
