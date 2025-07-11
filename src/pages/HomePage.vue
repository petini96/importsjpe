<template>
  
  <section id="carousel">
    <div class="row justify-content-center">
      <OverTimeCarrousel :posts="posts" v-if="posts.length > 0" />
    </div>
  </section>

  <section id="mini-products">
    <div class="q-pa-md my-5">
      <q-scroll-area
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :style="{ 
          height: height,
          minWidth: '100%'
        }">

        <q-resize-observer @resize="onResize"/>

        <div class="row no-wrap">
          <div 
            class="col-5 col-sm-5 col-md-3 q-pa-sm" 
            v-for="(product, index) in products" :key="index"
          >
            <SimpleProductCard
              class="full-height"
              :id="product.id"
              :name="product.name"
              :description="product.description"
              :photos="product.photos"
            />
          </div>
        </div>
      </q-scroll-area>
    </div>
  </section>

  <AboutMe />

  <CustomerReview />

  <MyVideos />
  <!-- about payment -->
  <PaymentWayInfo />

  <!-- marketing -->
  <YourNextPhoneMarketing />

  

</template>

<script setup lang="ts">

import { onMounted, computed, ref, defineAsyncComponent } from 'vue';
import { usePostStore } from '../stores/post-store';
import { useProductStore } from '../stores/product-store';
import { scroll } from 'quasar'

const OverTimeCarrousel = defineAsyncComponent(() => import('../components/OverTimeCarrousel.vue'));
const PaymentWayInfo = defineAsyncComponent(() => import('../components/home/sections/PaymentWayInfo.vue'));
const YourNextPhoneMarketing = defineAsyncComponent(() => import('../components/home/sections/YourNextPhoneMarketing.vue'));
const SimpleProductCard = defineAsyncComponent(() => import('../components/SimpleProductCard.vue'));
const AboutMe = defineAsyncComponent(() => import('../components/home/sections/AboutMe.vue'));
const CustomerReview = defineAsyncComponent(() => import('../components/home/sections/CustomerReview.vue'));
const MyVideos = defineAsyncComponent(() => import('../components/home/sections/MyVideos.vue'));

const height = ref('10px')
const onResize = (size: { height: number; width: number; }) => height.value = `${size.height}px` 
const { setVerticalScrollPosition, getScrollTarget } = scroll

const thumbStyle = {
  right: '4px',
  borderRadius: '5px',
  backgroundColor: 'pink',
  width: '5px',
  opacity: 0.75
} as unknown as Partial<CSSStyleDeclaration>;

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%'
} as unknown as Partial<CSSStyleDeclaration>;
 
const postStore = usePostStore();
const productStore = useProductStore();

const posts = computed(() => postStore.posts);
const products = computed(() => productStore.products);


function scrollToElement(el: Element) {
  const target = getScrollTarget(el);
  const duration = 1000;

  if (el instanceof HTMLElement) {
    const offset = el.offsetTop;
    setVerticalScrollPosition(target, offset, duration);
  } else {
    console.error('Provided element is not an HTMLElement.');
  }
}

onMounted(async () => {
  const marketingElement = document.querySelector("#carousel");
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


</script>

<style lang="scss">
@keyframes spin {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.icon {
  position: fixed;
  bottom: 8%;
  display: inline-block;
  transition: opacity 0.5s ease;

  &.animate {
    opacity: 1;
    animation: spin 5s linear forwards;
  }
}
</style>