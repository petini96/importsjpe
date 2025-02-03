<template>
  <section id="carousel">
    <div class="row justify-content-center">
      <OverTimeCarrousel :posts="posts" v-if="posts.length > 0" />
    </div>
  </section>

  <!-- <section id="mini-products">
    <div class="container my-5">
      <div class="row justify-content-center">
        <SimpleProductCard v-for="(product, index) in products" :key="index" :id="product.id" :name="product.name"
          :description="product.description" :photos="product.photos" />
      </div>
    </div>
  </section> -->

  <!-- about payment -->
  <PaymentWayInfo />

  <!-- marketing -->
  <YourNextPhoneMarketing />
  
</template>

<script setup lang="ts">
import OverTimeCarrousel from '../components/OverTimeCarrousel.vue';
import PaymentWayInfo from '../components/home/sections/PaymentWayInfo.vue';
import YourNextPhoneMarketing from '../components/home/sections/YourNextPhoneMarketing.vue';
// import SimpleProductCard from '../components/SimpleProductCard.vue';
import { onMounted, computed } from 'vue';
import { usePostStore } from '../stores/post-store';
// import { useProductStore } from '../stores/product-store';

const postStore = usePostStore();
// const productStore = useProductStore();

const posts = computed(() => postStore.posts);
// const products = computed(() => productStore.products);

onMounted(async () => {
  try {
    console.log("fetch data");
    await postStore.fetchPosts(0, 10);
    // await productStore.fetchProducts(0, 10);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style>
.zoom-in:hover {
  padding: 10px;
  transition: 0.3s;
}

.bolerada-bg-black {
  background-color: #1c1c1c94 !important;
  color: white;

}

.bolerada-bg-black:hover {
  padding: 10px;
  transition: 0.3s;
}

.text-icon {
  display: inline;
}

li {
  list-style: none;
}

.my-menu svg {
  width: 30px;
  position: fixed;
  z-index: 1;
  color: white;
  fill: #FFC100;
}

h1 {
  font-size: 3.5em;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#figure {
  animation: borderAnimate 2s infinite;
}

@keyframes borderAnimate {
  0% {
    border: #0000 solid;
  }

  50% {
    border: #ffc100 solid;
  }

  100% {
    border: #0000 solid;
  }
}

.my-video2 {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  border: solid white 1px;
}

.catalogo-option {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
}

.catalogo-option span {
  font-size: 2em;
  margin-right: 5%;
  color: white;
}
</style>