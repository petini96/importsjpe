<template>

  <!-- carrousel -->
  <section id="carousel">
    <div class="row justify-content-center">
      <OverTimeCarrousel :posts="posts" v-if="posts.length > 0" />
    </div>
  </section>

  <!-- miniature products -->
  <section id="mini-products">

    <div class="q-pa-md my-5">
      <q-scroll-area :thumb-style="thumbStyle" style="height: 390px; max-width: 100%;">
        <q-page-container>
          <div class="row no-wrap">
            <SimpleProductCard v-for="(product, index) in products" :key="index" :id="product.id" :name="product.name"
              :description="product.description" :photos="product.photos" />
          </div>
        </q-page-container>
      </q-scroll-area>
    </div>

  </section>

  <div class="q-pa-md">
    <pre class="q-ma-none container">{{ scrollInfo }}</pre>
    <q-scroll-observer @scroll="onScroll" />
  </div>

  <!-- about payment -->
  <PaymentWayInfo />

  <!-- marketing -->
  <YourNextPhoneMarketing />

  <div id="donut" class="icon" :class="{ animate: isDonutVisible }">
    <q-img src="../assets/images/svg/smile-donut.svg" alt="Donut image" fit="cover" style="width: 125px;" />
  </div>

</template>

<script setup lang="ts">
import OverTimeCarrousel from '../components/OverTimeCarrousel.vue';
import PaymentWayInfo from '../components/home/sections/PaymentWayInfo.vue';
import YourNextPhoneMarketing from '../components/home/sections/YourNextPhoneMarketing.vue';
import SimpleProductCard from '../components/SimpleProductCard.vue';
import { onMounted, onUnmounted, computed, ref } from 'vue';
import { usePostStore } from '../stores/post-store';
import { useProductStore } from '../stores/product-store';
import { QScrollObserver, scroll } from 'quasar'
const { setVerticalScrollPosition, getScrollTarget } = scroll

const scrollInfo = ref({})

const onScroll = ((info: QScrollObserver) => {
  scrollInfo.value = info

})

const thumbStyle = {
  right: '4px',
  borderRadius: '5px',
  backgroundColor: 'pink',
  width: '5px',
  opacity: 0.75
} as unknown as Partial<CSSStyleDeclaration>;



const isDonutVisible = ref(false);

const postStore = usePostStore();
const productStore = useProductStore();

const posts = computed(() => postStore.posts);
const products = computed(() => productStore.products);

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.offsetHeight;

  if (scrollPosition >= pageHeight - 50) {
    isDonutVisible.value = true;
  }
};

function scrollToElement(el: Element) {
  const target = getScrollTarget(el);
  const duration = 1000;
  window.addEventListener("scroll", handleScroll);

  if (el instanceof HTMLElement) {
    const offset = el.offsetTop;
    setVerticalScrollPosition(target, offset, duration);
  } else {
    console.error('Provided element is not an HTMLElement.');
  }
}


onMounted(async () => {
  const marketingElement = document.querySelector("#marketing");
  if (marketingElement) {
    scrollToElement(marketingElement)
  }

  try {
    console.log("fetch data");
    await postStore.fetchPosts(0, 10);
    await productStore.fetchProducts(0, 10);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.icon {
  // Começa invisível
  transition: opacity 0.5s ease;

  &.animate {
    opacity: 1; // Torna-se visível ao atingir 90% do scroll
    animation: spin 2s linear infinite;
  }
}
</style>