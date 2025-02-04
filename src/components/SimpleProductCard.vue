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
  <div class="col-12 col-md-3 col-lg-3 q-my-lg q-my-md-xl">
    <q-card class="bg-primary q-mx-md q-my-xs q-my-md-xl q-px-md zoom-in" style="max-width: 150px; min-width: 150px; height: 200px;" @click="handleProductClick">
      <q-card-section class="q-pa-none q-my-none" style="height: 100px;">
        <q-img 
          v-if="photos?.length" 
          :src="photos[0] ? photos[0].url : ''" 
          alt="Product image" 
          class="img-fluid"
          fit="cover"
          style="height: 100%; object-fit: cover;"
        />
      </q-card-section>
  
      <q-separator dark />
  
      <q-card-actions align="center" class="q-pa-none q-my-md">
        <div class="q-pa-none">
          <q-item-label class="text-secondary text-bold">{{ name }}</q-item-label>
          <q-item-label class="text-white">{{ description }}</q-item-label>
        </div>
      </q-card-actions>
    </q-card>
  </div>
  
</template>