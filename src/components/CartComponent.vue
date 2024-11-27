<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const cartProducts = computed(() => {
  console.log(store.getters.getCartProducts);
  return store.getters.getCartProducts;
});

const handleShowCart = () => {

  router.push({ name: 'product' });
};

</script>

<template>
  <div class="col-12">
    <div @click="handleShowCart" class="card bg-black text-white my-1 my-md-5 zoom-in">
      <h1>Ver sacola</h1>
      <ul>
        <li v-for="product in cartProducts">
          {{ product.productName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
