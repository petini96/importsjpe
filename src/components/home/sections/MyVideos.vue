<template>
  <div class="container">
    <div class="row justify-center items-center">
      <div class="col-10">
        <h3 class="font-primoto-pro text-primary">Videos</h3>
      </div>
      <div class="col-10 col-md-3">
        <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/cQl1VdSQLPo?rel=0" />
      </div>
      <div class="col-10 col-md-3 q-my-lg q-mx-lg">
        <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/Sdng1zW-990?rel=0" />
      </div>
      <div class="col-10 col-md-3">
        <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/0vhpT4T1VXs?rel=0" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useScrollStore } from 'src/stores/scrollStore';

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

</script>

<style>
.stars-animation .q-rating__icon-container {
  display: inline-block;
  animation: starsAnimation 8s ease-in-out infinite;
}

.stars-animation .q-rating__icon-container:nth-child(1) {
  animation-delay: 0s;
}

.stars-animation .q-rating__icon-container:nth-child(2) {
  animation-delay: 0.8s;
}

.stars-animation .q-rating__icon-container:nth-child(3) {
  animation-delay: 1.6s;
}

.stars-animation .q-rating__icon-container:nth-child(4) {
  animation-delay: 2.4s;
}

.stars-animation .q-rating__icon-container:nth-child(5) {
  animation-delay: 3.2s;
}

@keyframes starsAnimation {

  0%,
  12.5%,
  100% {
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