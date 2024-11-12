<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import { RouterLink, RouterView } from "vue-router";

defineProps({
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  link: {
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
 const makeClass = (count) =>{
  return "delay-"+ count.toString();
 }
</script>

<template>
  <router-link :to="{ name: 'teans', params: { title: description, namecp: namecp } }">
    <div class="card-category">
      <figure id="figure" class="rounded row justify-content-center align-items-center" :class="makeClass(count)">
        <a class="col-4"><img :src="photo" alt="" class="card-img" /></a>
        <!-- <a  target="_blank" class="col-4"><img :src="photo" alt=""  class="card-img "></a> -->
        <figcaption class="text-center col-8">{{ description }}</figcaption>
      </figure>
    </div>
  </router-link>
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
