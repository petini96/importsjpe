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
  if ($q.screen.xs) return { maxWidth: '250px', height: "75vh" };
  if ($q.screen.sm) return { maxWidth: '250px', height: "75vh" };
  if ($q.screen.md) return { maxWidth: '300px', height: "60vh" };
  return { maxWidth: "20vw", height: "90%" };
});

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
      class="shadown-pink border-rounded"
      :style="{ width: '70vw', maxWidth: cardSize.maxWidth, height: cardSize.height }"
      @click="handleProductClick"
    >
      <!-- Imagem -->
      <q-card-section 
        class="card-image-container"
        :style="{ height:'50%'}"
      >
        <q-img 
          v-if="photos?.length" 
          :src="photos[0]?.url" 
          alt="Product image" 
          class="img-fluid"
          fit="cover"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </q-card-section>

      <q-separator dark />

      <q-card-section 
        :style="{ height:'35%'}"
      >
        <q-item-label class="text-secondary text-bold font-primoto-pro text-h6 ">{{ name }}</q-item-label>
        <q-item-label class="text-black">{{ description }}</q-item-label>
      </q-card-section>

      <!-- Nome e Descrição -->
      <q-card-actions 
        align="center" 
        class="q-my-sm flex column"
        :style="{ 
          height: '10%'
        }"
      >
  
        <q-btn color="primary" icon-right="send" label="Comprar" />

      </q-card-actions>
    </q-card>
  </div>
</template>

<style scoped>
.shadown-pink{
  box-shadow: 0px 4px 10px rgba(200, 80, 140, 0.5);
}

.border-rounded{
  border-radius: 15px;
}
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
