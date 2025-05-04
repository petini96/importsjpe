<template>
  <div class="container">
    <div class="row">
      <div
        id="donut"
        class="col-3 icon fixed-bottom"
        :class="{ animate: isDonutVisible }"
        :style="{
          transform: `rotate(${donutRotation}deg)`,
          filter: `grayscale(${donutGrayScale})`
        }"
      >
        <q-img
          src="../../assets/images/svg/smile-donut.svg"
          alt="Donut image"
        />
      </div>
    </div>
  </div>

  <q-scroll-observer @scroll="onScroll" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { type ScrollDetails } from 'src/types/Scroll';

const isDonutVisible = ref(false);
const donutRotation = ref(0);
const donutGrayScale = ref(0);

const $q = useQuasar();

const scrollInfo = ref({});

const onScroll = (info: ScrollDetails) => {
  const screenHeight = $q.screen.height;
  const scrollPercentage = screenHeight ? info.position.top / screenHeight : 0;

  const elementToScroll = document.querySelector("#footer");
  const documentHeight = document.documentElement.scrollHeight;

  if (elementToScroll) {
    const footerRect = elementToScroll.getBoundingClientRect();
    const footerTop = footerRect.top;
    const footerBottom = footerRect.bottom;

    // Verifica se o footer está visível na tela
    if (footerTop < screenHeight && footerBottom > 0) {
      isDonutVisible.value = true;
    } else {
      isDonutVisible.value = false;
    }

 
    const isAtBottom = info.position.top + screenHeight >= documentHeight - 10;
    if (isAtBottom) {
      isDonutVisible.value = true;
      setTimeout(() => {
        isDonutVisible.value = false; // Após a animação (5s), esconde o donut
      }, 5000); // Tempo da animação spin
    }
  }

  donutGrayScale.value = scrollPercentage;
  donutRotation.value = info.position.top * 0.4;

  scrollInfo.value = info;
};
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
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin: 0;
  padding: 0;
  bottom: calc(env(safe-area-inset-bottom) + 10px);
  z-index: 1000;

  &.animate {
    opacity: 1;
    animation: spin 5s linear forwards;
  }
}

.container, .row {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
</style>