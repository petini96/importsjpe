<template>
  <q-page class="row items-center justify-evenly">
    <section id="carousel">
      <div class="row justify-content-center">
        <h1>paramos por aqui</h1>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { usePostStore } from 'src/store/post-store';
// import { onMounted } from 'vue';
const postStore = usePostStore();
console.log(postStore.posts);

// onMounted(async () => {
//   try {
//     console.log("fetch data");
//     await postStore.fetchPosts(0, 10);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }

// });
</script>
