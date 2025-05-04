<template>
  <div class="full-height full-width">
    <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <!-- Nav section -->
      <NavLayout />

      <q-page-container>
        <q-page>
          <TabMenu
            :tab-props="[
              { name: 'about', label: 'Sobre' },
              { name: 'menu', label: 'Cardápio' },
              { name: 'gallery', label: 'Galeria' },
              { name: 'customer', label: 'Clientes' }
            ]"
          />
          <router-view />

          <!-- Botão de subir -->
          <!-- <q-page-scroller position="bottom-right" :scroll-offset="900" :offset="[0, 0]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" class="scroll-to-top" />
          </q-page-scroller> -->

          <!-- Botão de chat -->
          <q-btn
            fab
            icon="chat"
            color="primary"
            class="fixed-bottom-right chat-button"
            style="bottom: 20px; right: 20px; z-index: 1100;"
            @click="toggleTypebot"
          />

          <!-- Container do Typebot -->
          <div v-show="showTypebot" class="typebot-container">
            <typebot-standard ref="typebot" style="width: 100%; height: 100%;" />
            <q-btn
              fab
              icon="close"
              color="negative"
              class="fixed-top-right"
              style="top: 10px; right: 10px; z-index: 2100;"
              @click="toggleTypebot"
            />
          </div>

          <!-- Donut -->
          <DonutComponent />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import TabMenu from 'src/components/generics/tab/TabMenu.vue';
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue';

const DonutComponent = defineAsyncComponent(() => import('src/components/donut/DonutComponent.vue'));

const showTypebot = ref(false);

const toggleTypebot = () => {
  showTypebot.value = !showTypebot.value;
};

onMounted(() => {
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3.59/dist/web.js';
  script.onload = () => {
    window.Typebot.initStandard({
      typebot: 'my-typebot-dtt67xz',
      apiHost: 'https://vtypebot.roboticsmind.com.br',
    });
  };
  script.async = true;
  script.onerror = () => {
    console.error('Failed to load Typebot script');
  };
  document.head.appendChild(script);
});

onUnmounted(() => {
  const script = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3.59/dist/web.js"]');
  if (script) script.remove();
});
</script>

<style lang="scss">
.fixed-bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.fixed-top-right {
  position: fixed;
  top: 20px;
  right: 20px;
}

.typebot-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2000;
}

.chat-button {
  animation: pulse 2s infinite;
}

.scroll-to-top {
  bottom: calc(env(safe-area-inset-bottom) + 80px);
  z-index: 1000;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>