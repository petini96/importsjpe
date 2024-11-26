<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const props = defineProps({
  productName: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productBrand: {
    type: String,
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
const store = useStore();

const handleProductClick = () => {
  const product = {
    productName: props.productName,
    productCategory: props.productCategory,
    productBrand: props.productBrand,
    originalPrice: props.originalPrice,
    discountPercentage: props.discountPercentage,
    discountedPrice: props.discountedPrice,
    installmentPrice: props.installmentPrice,
    installmentsCount: props.installmentsCount,
    additionalInfo: props.additionalInfo,
    description: props.description,
    photos: props.photos,
  };

  store.dispatch('updatePickedProduct', product);

  router.push({ name: 'product' });
};
</script>

<template>
  <div class="col-10 col-md-3 col-lg-3 my-1 my-md-5">
    <div @click="handleProductClick" class="card bg-black my-1 my-md-5 zoom-in">
      <div class="card-body">
        <img :src="photos[0]" alt="" class="img-fluid" />
      </div>
      <div class="card-footer text-center text-white">
        <li><strong>{{ description }}</strong></li>
      </div>
    </div>
  </div>
</template>

<style></style>
