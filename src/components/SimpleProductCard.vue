<script setup lang="ts">

import { useRouter } from 'vue-router';
import { useProductStore } from '../store/modules/product-store';

const props = defineProps<{
  id: number;
  name: string;
  description: string;
  photos: { id: number; url: string; fileType: string; fileSize: number; createdAt: number }[];
}>();

const router = useRouter();
const productStore = useProductStore();

const handleProductClick = () => {
  productStore.setSelectedProduct(props.id);
  router.push({ name: 'product' });
};

</script>

<template>
  <div class="col-10 col-md-3 col-lg-3 my-1 my-md-5">
    <div @click="handleProductClick" class="card bg-black my-1 my-md-5 zoom-in">
      <div class="card-body">
        <img 
          :src="photos.length > 0 ? photos[0].url : 'placeholder-image-url.png'" 
          alt="Product image" 
          class="img-fluid" 
        />
      </div>
      <div class="card-footer text-center text-white">
        <li><strong>{{ description }}</strong></li>
      </div>
    </div>
  </div>
</template>