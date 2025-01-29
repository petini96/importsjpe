<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: String,
    required: true,
  },
  discountedPrice: {
    type: String,
    required: true,
  },
  installmentPrice: {
    type: String,
    required: true,
  },
  installmentsCount: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const handleProductClick = async () => { 
  const product = {
    id: props.id,
    name: props.name,
    category: props.category,
    brand: props.brand,
    quantity: props.quantity,
    originalPrice: props.originalPrice,
    discountPercentage: props.discountPercentage,
    discountedPrice: props.discountedPrice,
    installmentPrice: props.installmentPrice,
    installmentsCount: props.installmentsCount,
    additionalInfo: props.additionalInfo,
    description: props.description,
    photos: props.photos,
  };

  console.log(product);
  // store.dispatch('updatePickedProduct', product);

  try {
    await router.push({ name: 'product' });
  } catch (error) {
    console.error('Erro ao navegar:', error);
  }
};

</script>

<template>
  <div class="col-10 col-md-3 col-lg-3 my-1 my-md-5">
    <div @click="handleProductClick" class="card bg-black my-1 my-md-5 zoom-in">
      <div class="card-body">
        <!-- <img :src="photos[0]" alt="" class="img-fluid" /> -->
      </div>
      <div class="card-footer text-center text-white">
        <li><strong>{{ description }}</strong></li>
      </div>
    </div>
  </div>
</template>

<style></style>
