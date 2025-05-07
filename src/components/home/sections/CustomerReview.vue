<template>
  <div id="review" class="q-my-xl">
    <q-parallax :height="parallaxSize.height" :src="parallaxSize.image">
      <div id="review-card" class="container">
        <div class="row justify-center items-center">
          <div class="col-8 col-md-2 text-center q-mb-lg"> 
            <div class="photo q-mx-auto">
              <q-img src="../../../assets/images/review1.webp" :ratio="1" class="border-1 rounded" />
            </div>
            <div class="text q-mt-md text-white">
              "Gosto muito do trabalho da Marília! Ela é <strong> super atenciosa </strong> e sempre <strong> entrega no prazo</strong>. Recomendo!" 
            </div>
            <div>
              <q-rating size="18px" v-model="stars" :max="5" color="primary" readonly :class="{'stars-animation': isReviewVisible }"/> 
            </div>
          </div>

          <div class="col-8 col-md-2 text-center q-mb-lg q-mx-lg"> 
            <div class="photo q-mx-auto">
              <q-img src="../../../assets/images/review2.webp" :ratio="1" class="border-1 rounded" />
            </div>
            <div class="text q-mt-md text-white">
              "Sensacional! Um trabalho <strong> muito bem feito </strong> que apoia <strong>animais carentes</strong>. Valeu demais!" 
            </div>
            <div>
              <q-rating size="18px" v-model="stars" :max="5" color="primary" readonly :class="{'stars-animation': isReviewVisible }"/> 
            </div>
          </div>

          <div class="col-8 col-md-2 text-center">
            <div class="photo q-mx-auto">
              <q-img src="../../../assets/images/review3.webp" :ratio="1" class="border-1 rounded" />
            </div>
            <div class="text q-mt-md text-white">
              "Puta que o paril! Essa mulher é <strong> Pica to Fly! </strong> amo o trabalho dela <strong> foda-se vocês</strong>. Foda-se!" 
            </div>
            <div>
              <q-rating size="18px" v-model="stars" :max="5" color="primary" readonly :class="{'stars-animation': isReviewVisible }"/> 
            </div>
          </div>
        </div>
      </div>
    </q-parallax>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref, watch } from 'vue';
import verticalSweet from '../../../assets/images/vertical-sweet.svg';
import horizontalSweet from '../../../assets/images/horizontal-sweet.svg';
import { useScrollStore } from 'src/stores/scrollStore';

const $q = useQuasar();
const isReviewVisible = ref(false);
const scrollStore = useScrollStore();

const hasAppeared = ref(false);

watch(
  () => scrollStore.scrollInfo,
  () => {
    if (hasAppeared.value) return;

    const reviewSection = document.querySelector('#review') as HTMLElement;
    if (!reviewSection) return;

    const rect = reviewSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      isReviewVisible.value = true;
      hasAppeared.value = true;
      console.log('Review section is visible, animation should start'); // Debug
    }
  },
  { deep: true }
);

const parallaxSize = computed(() => {
  if ($q.screen.xs) return { height: 800, image: verticalSweet };
  if ($q.screen.md) return { height: 600, image: horizontalSweet };
  return { height: 1000, image: horizontalSweet };
});

const stars = ref(4.5);
</script>

<style>
.stars-animation .q-rating__icon-container {
  display: inline-block;
  animation: starsAnimation 8s ease-in-out infinite;
}

.stars-animation .q-rating__icon-container:nth-child(1) { animation-delay: 0s; }
.stars-animation .q-rating__icon-container:nth-child(2) { animation-delay: 0.8s; }
.stars-animation .q-rating__icon-container:nth-child(3) { animation-delay: 1.6s; }
.stars-animation .q-rating__icon-container:nth-child(4) { animation-delay: 2.4s; }
.stars-animation .q-rating__icon-container:nth-child(5) { animation-delay: 3.2s; }

@keyframes starsAnimation {
  0%, 12.5%, 100% {
    transform: translateY(0);
  }
  6.25% {
    transform: translateY(-5px);
  }
  9.375% {
    transform: translateY(5px);
  }
}

.rounded {
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.photo {
  max-width: 120px;
  width: 100%;
}

.text {
  font-size: 1.1em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.container {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>