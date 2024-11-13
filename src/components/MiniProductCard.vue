<script setup>
import { RouterLink, RouterView } from 'vue-router'
 
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
});

</script>

<template>
  <div class="col-10 col-md-3 col-lg-3 my-1 my-md-5">
    <RouterLink :to="{ path: '/produto/' + this.link }">
      <div class="card bg-black my-1 my-md-5 zoom-in">
        <div class="card-body">
          <img
            :src="this.photo"
            alt="" class="img-fluid">
        </div>
        <div class="card-footer text-center text-white">
          <li><strong>{{this.description}}</strong></li>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style> 
</style>
