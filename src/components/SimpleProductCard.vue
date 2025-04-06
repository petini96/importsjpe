<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/product-store';

const props = defineProps<{
  id: number;
  name: string;
  description: string;
  photos: { id: number; url: string; fileType: string; fileSize: number; createdAt: number }[];
}>();

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
      @click="handleProductClick"
    >
    
      <q-card-section 
        class="card-image-container"
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

      <q-card-section class="col-grow">
        <q-item-label class="text-secondary text-bold font-primoto-pro text-h6 ">{{ name }}</q-item-label>
        <q-item-label class="text-black">{{ description }}</q-item-label>
      </q-card-section>
      
      <q-card-actions 
        align="center" 
        class="q-my-sm"
      >
        <q-btn color="primary" icon-right="send" label="Comprar" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<style scoped>
.shadown-pink {
  box-shadow: 0px 4px 10px rgba(200, 80, 140, 0.5);
}

.border-rounded {
  border-radius: 15px;
}

.full-height {
  height: 100%;
}

.q-card {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
}

.card-image-container {
  height: 180px;
}

.q-card-section {
  flex-grow: 1;
}

.fixed-title {
  height: 24px;
  line-height: 24px;
}

.fixed-description {
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.q-card-actions {
  flex-shrink: 0;
}

</style>