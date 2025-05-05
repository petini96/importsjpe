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

  <q-scroll-observer @scroll="onScroll" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type ScrollDetails } from 'src/types/Scroll'; 

const isDonutVisible = ref(true); // Começa visível
const donutRotation = ref(0);
const donutGrayScale = ref(0);

const scrollInfo = ref({});

const onScroll = (info: ScrollDetails) => {
  const html = document.documentElement;
  const marketingSection = document.querySelector("#marketing") as HTMLElement;
  
  if (marketingSection) {
    const marketingSectionTop = marketingSection.offsetTop; // Posição do topo do elemento em relação ao topo da página
    const viewportHeight = window.innerHeight; // Altura do viewport
    const scrollPosition = info.position.top; // Posição de rolagem atual
    const scrollBottom = scrollPosition + viewportHeight; // Posição do fundo do viewport

    // Verifica se o fundo do viewport atingiu o topo do #marketing
    if (scrollBottom >= marketingSectionTop) {
      // Quando atinge a seção #marketing, esconde o donut
      isDonutVisible.value = false;
    } else {
      // Antes de atingir a seção #marketing, mostra o donut
      isDonutVisible.value = true;
    }

    console.log("html.offsetHeight:", html.offsetHeight);
    console.log("marketingSectionTop:", marketingSectionTop);
    console.log("scrollBottom:", scrollBottom);
    console.log("scrollPosition:", scrollPosition);
  }

  // Atualiza a rotação do donut com base na posição de rolagem
  donutRotation.value = info.position.top * 0.4;
  scrollInfo.value = info;
};
</script>

<style lang="scss">
.icon {
  transition: opacity 0.5s ease, transform 0.5s ease; // Transição suave para opacidade e rotação
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