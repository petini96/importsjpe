<script setup>
import { RouterLink, RouterView } from 'vue-router'

defineProps({
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

</script>

<template>
  <div class="col-10 col-md-3 col-lg-3 my-1 my-md-5">
    <RouterLink :to="{
      name: 'product',
      query: {
        product: JSON.stringify(
          {
            productName: productName,
            productCategory: productCategory,
            productBrand: productBrand,
            originalPrice: originalPrice,
            discountPercentage: discountPercentage,
            discountedPrice: discountedPrice,
            installmentPrice: installmentPrice,
            installmentsCount: installmentsCount,
            additionalInfo: additionalInfo,
            description: description,
            photos: photos
          }
        )
      }
    }" class="card bg-black my-1 my-md-5 zoom-in">
      <div class="card-body">
        <img :src="photos[0]" alt="" class="img-fluid">
      </div>
      <div class="card-footer text-center text-white">
        <li><strong>{{ description }}</strong></li>
      </div>
    </RouterLink>
  </div>
</template>


<script>
export default {
  methods: {},
};
</script>

<style></style>
