<script setup lang="ts">
import { defineProps } from 'vue';

// Definindo que o parâmetro 'product' é um objeto necessário
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <section v-if="product">
    <div class="product-viewer mx-5">
      <h1 class="my-3">{{ product.description }}</h1>
      <div class="photo">
        <img :src="product.photo" alt="Imagem do produto" class="img-fluid" />
      </div>
    </div>
  </section>
  <section v-else>
    <p>Produto não encontrado.</p>
  </section>
</template>

<style scoped>
.product-viewer .photo {
  min-width: 300px;
  max-width: 300px;
}

/* Estilos opcionais */
</style>
