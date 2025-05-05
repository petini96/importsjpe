<template>
  <div class="container">
    <div class="row">
      <div id="donut" class="col-3 col-md-1 icon fixed-bottom" :style="{
        transform: `rotate(${donutRotation}deg)`,
        filter: `grayscale(${donutGrayScale})`,
        opacity: isDonutVisible ? 1 : 0
      }">
        <q-img src="../../assets/images/svg/smile-donut.svg" alt="Donut image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { type ScrollDetails } from 'src/types/Scroll';
import { useScrollStore } from 'src/stores/scrollStore';

const scrollStore = useScrollStore();

const isDonutVisible = ref(true);
const donutRotation = ref(0);
const donutGrayScale = ref(0);

watch(
  () => scrollStore.scrollInfo,
  (newScrollInfo: ScrollDetails | null) => {
    console.log('Watch triggered in DonutComponent:', newScrollInfo);
    if (!newScrollInfo) return;

    const html = document.documentElement;
    const marketingSection = document.querySelector('#marketing') as HTMLElement;
    const scrollPosition = newScrollInfo.position.top;
    const viewportHeight = window.innerHeight;
    const scrollBottom = scrollPosition + viewportHeight;

    console.log('Scroll details:', {
      scrollPosition,
      viewportHeight,
      scrollBottom,
      marketingSection: !!marketingSection,
    });

    if (marketingSection) {
      const marketingSectionTop = marketingSection.offsetTop;
      isDonutVisible.value = scrollBottom < marketingSectionTop;
    } else {
      console.warn('Marketing section not found');
    }

    donutRotation.value = scrollPosition * 0.4;
    donutGrayScale.value = scrollPosition / html.scrollHeight;
  },
  { deep: true }
);
</script>

<style lang="scss">
.icon {
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin: 0;
  padding: 0;
  bottom: calc(env(safe-area-inset-bottom) + 10px);
  z-index: 1000;
}

.container,
.row {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
</style>