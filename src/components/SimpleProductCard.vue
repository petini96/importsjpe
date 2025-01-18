<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
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
});

const router = useRouter();
const store = useStore();

const handleProductClick = () => {

  const product = {
    id: props.id,
    name: props.name,
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


<style></style>
