<template>
  <div class="full-height full-width">
    <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <NavLayout />
      <q-page-container>
        <q-page ref="pageRef">
          <TabMenu
            :tab-props="[
              { name: 'about', label: 'Sobre' },
              { name: 'menu', label: 'Cardápio' },
              { name: 'gallery', label: 'Galeria' },
              { name: 'customer', label: 'Clientes' }
            ]"
          />
          <router-view />
          <q-btn
            fab
            icon="chat"
            color="primary"
            class="fixed-bottom-right chat-button"
            style="bottom: 20px; right: 20px; z-index: 1100;"
            @click="toggleTypebot"
          />
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
          <q-scroll-observer @scroll="onScroll" />
          <DonutComponent />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import TabMenu from 'src/components/generics/tab/TabMenu.vue';
import DonutComponent from 'src/components/donut/DonutComponent.vue';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import { type ScrollDetails } from 'src/types/Scroll';
import { useScrollStore } from 'src/stores/scrollStore';

const scrollStore = useScrollStore();

const onScroll = (info: ScrollDetails) => {
  scrollStore.setScrollInfo(info);
};

const showTypebot = ref(false);
const pageRef = ref<HTMLElement | null>(null);

const toggleTypebot = () => {
  showTypebot.value = !showTypebot.value;
};

onMounted(async () => {
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

  await nextTick();
 
});

onUnmounted(() => {
  const script = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3.59/dist/web.js"]');
  if (script) script.remove();
});
</script>