<template>
  <div class="full-height full-width">
    <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">

      <!-- nav section -->
      <NavLayout />

      <q-page-container>
        <q-page>
          <TabMenu :tab-props="[
            { name: 'about', label: 'Sobre' },
            { name: 'menu', label: 'Cardápio' },
            { name: 'gallery', label: 'Galeria' },
            { name: 'customer', label: 'Clientes' }
          ]" />
          <router-view />
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>

          <q-btn
            fab
            icon="chat"
            color="primary"
            class="fixed-bottom-right"
            style="bottom: 20px; right: 20px; z-index: 1000;"
            @click="toggleTypebot"
          />

          <div v-show="showTypebot" class="typebot-container">
            <typebot-standard ref="typebot" style="width: 100%; height: 100%;" />
            <q-btn
              fab
              icon="close"
              color="negative"
              class="fixed-top-right"
              style="top: 10px; right: 10px;"
              @click="toggleTypebot"
            />
          </div>

        </q-page>
      </q-page-container>

    </q-layout>
  </div>
</template>

<script setup lang="ts">
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import TabMenu from 'src/components/generics/tab/TabMenu.vue';

import { onMounted, onUnmounted, ref } from 'vue';

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
</style>