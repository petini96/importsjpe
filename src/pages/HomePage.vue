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
      <q-scroll-area :thumb-style="thumbStyle"
        :style="{ 
          height: containerCard.height, 
          maxHeight: containerCard.maxHeight, 
          width: containerCard.width 
        }">
        <div class="row no-wrap justify-center">
          <SimpleProductCard v-for="(product, index) in products" :key="index" :id="product.id" :name="product.name"
            :description="product.description" :photos="product.photos" />
        </div>
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

  <!-- donut -->
  <div id="donut" class="icon" :class="{ animate: isDonutVisible }"
    :style="{ transform: `rotate(${donutRotation}deg)`, filter: `grayscale(${donutGrayScale}) ` }">
    <q-img src="../assets/images/svg/smile-donut.svg" alt="Donut image" style="width: 125px;" />
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
import { scroll, useQuasar } from 'quasar'
import { type ScrollDetails } from 'src/types/Scroll';

const { getScrollHeight } = scroll

const $q = useQuasar();

const containerCard = computed(() => {
  if ($q.screen.xs) return { height: "600px", maxHeight: "auto", width: "100%" };
  if ($q.screen.sm) return { height: "600px", maxHeight: "auto", width: "100%" };
  if ($q.screen.md) return { height: "80vh", maxHeight: "auto", width: "100%" };
  return { height: "55vh", maxHeight: "auto", width: "100%" };
});

const { setVerticalScrollPosition, getScrollTarget } = scroll

const scrollInfo = ref({})
const onScroll = (info: ScrollDetails) => {
  const screenHeight = $q.screen.height
  const scrollPercentage = screenHeight ? info.position.top / screenHeight : 0;

  const elementToScroll: Element | null = document.querySelector("#footer");
  if(elementToScroll){
    console.log(`getScrollHeight: ${getScrollHeight(elementToScroll)}`);
  }
  console.log(`screenHeight: ${screenHeight}`);
  console.log(`scrollPercentage: ${scrollPercentage}`);
  console.log(info);

  donutGrayScale.value = scrollPercentage;
  donutRotation.value = info.position.top * 0.4;

  if (elementToScroll && info.position.top >= getScrollHeight(elementToScroll) ) {
    isDonutVisible.value = true;
  } else {
    isDonutVisible.value = false;
  }

  scrollInfo.value = info;
};


const thumbStyle = {
  right: '4px',
  borderRadius: '5px',
  backgroundColor: 'pink',
  width: '5px',
  opacity: 0.75
} as unknown as Partial<CSSStyleDeclaration>;

const isDonutVisible = ref(false);
const donutRotation = ref(0);
const donutGrayScale = ref(0);

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


onUnmounted(() => {
  // alert("xau")
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