<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/product-store';
import { useQuasar } from 'quasar';
import { computed } from 'vue';

const props = defineProps<{
  id: number;
  name: string;
  description: string;
  photos: { id: number; url: string; fileType: string; fileSize: number; createdAt: number }[];
}>();

const $q = useQuasar();

const cardSize = computed(() => {
  if ($q.screen.xs) return { width: "250px", height: "320px" };
  if ($q.screen.sm) return { width: "280px", height: "340px" };
  if ($q.screen.md) return { width: "300px", height: "340px" };
  return { width: "320px", height: "380px" };
});

const router = useRouter();
const productStore = useProductStore();

const handleProductClick = async () => {
  productStore.setSelectedProduct(props.id);
  await router.push({ name: 'product' });
};
</script>

<template>
  <div class="q-mx-md q-my-lg q-my-md-xl">
    <q-card 
      class="bg-primary"
      :style="{ width: cardSize.width, height: cardSize.height }"
      @click="handleProductClick"
    >
      <!-- Imagem -->
      <q-card-section class="q-px-md card-image-container">
        <q-img 
          v-if="photos?.length" 
          :src="photos[0]?.url" 
          alt="Product image" 
          class="img-fluid"
          fit="cover"
          style="width: 100%; height: 180px; object-fit: cover;"
        />
      </q-card-section>

      <q-separator dark />

      <!-- Nome e Descrição -->
      <q-card-actions align="center" class="q-pa-none q-my-md flex column">
        <q-item-label class="text-secondary text-bold fixed-title">{{ name }}</q-item-label>
        <q-item-label class="text-white fixed-description">{{ description }}</q-item-label>
      </q-card-actions>
    </q-card>
  </div>
</template>

<style scoped>
/* Garantir que a altura do título e da descrição sejam fixas */
.fixed-title {
  height: 24px; /* Ajuste conforme necessário */
  line-height: 24px;
}

.fixed-description {
  height: 40px; /* Ajuste conforme necessário */
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Garantir que a imagem ocupe um espaço fixo */
.card-image-container {
  height: 180px;
}
</style>
