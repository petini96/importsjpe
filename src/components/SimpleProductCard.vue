<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/product-store';
// import { useQuasar } from 'quasar';
// import { computed } from 'vue';

const props = defineProps<{
  id: number;
  name: string;
  description: string;
  photos: { id: number; url: string; fileType: string; fileSize: number; createdAt: number }[];
}>();

// const $q = useQuasar();

// const cardSize = computed(() => {
//   if ($q.screen.xs) return { maxWidth: "75vw", height: "500px" };
//   if ($q.screen.sm) return { maxWidth: "280px", height: "340px" };
//   if ($q.screen.md) return { maxWidth: "300px", height: "340px" };
//   return { maxWidth: "320px", height: "380px" };
// });

const router = useRouter();
const productStore = useProductStore();

const handleProductClick = async () => {
  productStore.setSelectedProduct(props.id);
  await router.push({ name: 'product' });
};
</script>

<template>
  <div class="q-pa-md">
    <q-card 
      class="product-card"
      @click="handleProductClick"
    >
      <q-card-section 
        class="product-card__header"
      >
        <q-img 
          v-if="photos?.length" 
          :src="photos[0]?.url" 
          alt="Product image" 
          class="product-card__image"
          fit="cover"
        />
      </q-card-section>

      <q-separator dark class="product-card__divider" />

      <q-card-section class="product-card__content">
        <q-item-label class="product-card__title">{{ name }}</q-item-label>
        <q-item-label class="product-card__description">{{ description }}</q-item-label>
      </q-card-section>

      <q-card-actions class="product-card__actions">
        <q-btn color="primary" icon-right="send" label="Comprar" class="product-card__buy-button" />
      </q-card-actions>
    </q-card> 
  </div>
</template>

<style lang="scss" scoped>
// 1. Variáveis para cores (facilita manutenção)
$color-primary: #007bff; // Cor primária (substitua pelo valor real do Quasar)
$color-divider: #0000ff; // Azul para o separador
$color-header-bg: #ff0000; // Vermelho para o header
$color-image-bg: #00ff00; // Verde para a imagem
$color-content-bg: #ffff00; // Amarelo para o conteúdo
$color-title-bg: #ff69b4; // Rosa para o título
$color-description-bg: #800080; // Roxo para a descrição
$color-actions-bg: #0000ff; // Azul para as ações
$color-buy-button-bg: #ffa500; // Laranja para o botão de compra

// 2. Estilos do bloco principal (product-card)
.product-card{
  @extend %shadown-pink;
 
  // Estilos base do cartão
  background-color: black;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 400px) {
    padding: 1rem;
    height: 100%;
  }

  &__header {
    background-color: $color-header-bg;
    display: flex;
    flex-direction: column;

    @media (max-width: 400px) {
      height: 50%;
      max-height: 200px;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__divider {
    background-color: $color-divider;
  }

  &__content {
    background-color: $color-content-bg;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 400px) {
      height: 35%;
    }
  }

    &__title {
      @extend %font-primoto-pro;
      background-color: $color-title-bg;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 8px;
    }

    &__description {
      background-color: $color-description-bg;
      font-size: 0.9rem;
      line-height: 1.5;
    }

  &__actions {
    background-color: $color-actions-bg;
    padding: 8px;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 400px) {
      height: 15%;
    }
  }

    &__buy-button {
      background-color: $color-buy-button-bg;
    }
}
</style>