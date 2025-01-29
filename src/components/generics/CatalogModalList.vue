<script setup lang="ts">

defineProps({
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  namecp: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const makeClass = (count: number) => {
  return "delay-" + count.toString();
}
</script>

<template>
  <div class="card-category px-4" >
    <figure id="figure"
      class="rounded row justify-content-center align-items-center" :class="makeClass(count)" 
      data-bs-target="#exampleModal">
      <a class="col-4">
        <img :src="photo" alt="logo da liga" class="card-img" /></a>
      <figcaption class="text-center col-8">{{ description }}</figcaption>
    </figure>
  </div>
</template>
 

<style scoped>
h4 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
