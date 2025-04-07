<template>
  <div 
    id="donut" 
    class="icon" 
    :class="{ animate: isDonutVisible }"
    :style="{ 
      transform: `rotate(${donutRotation}deg)`, 
      filter: `grayscale(${donutGrayScale}) ` 
    }"
  >
    <q-img 
      src="../../assets/images/svg/smile-donut.svg" 
      alt="Donut image" 
      style="width: 125px;" 
    />
  </div>
  <q-scroll-observer @scroll="onScroll" />
</template>

<script setup lang="ts"> 
import { ref } from 'vue';
import { scroll, useQuasar } from 'quasar'
import { type ScrollDetails } from 'src/types/Scroll';

const isDonutVisible = ref(false);
const donutRotation = ref(0);
const donutGrayScale = ref(0);

const { getScrollHeight } = scroll

const $q = useQuasar();

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