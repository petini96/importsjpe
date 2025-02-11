<template>
  <q-layout view="lHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-toolbar-title>Header</q-toolbar-title>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple to="/produto/cadastro">
            <q-item-section avatar>
              <q-icon name="inventory_2" />
            </q-item-section>
            <q-item-section>
              Produto
            </q-item-section>
          </q-item>
        
          <q-item clickable v-ripple to="/banner/cadastro">
            <q-item-section avatar>
              <q-icon name="post_add" />
            </q-item-section>
            <q-item-section>
              Postagem
            </q-item-section>
          </q-item>
        </q-list>
        
        
      </q-scroll-area>

      <q-img class="absolute-top" src="https://static.vecteezy.com/system/resources/previews/028/154/353/non_2x/square-banner-with-pink-heart-shaped-background-vector.jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://avatars.githubusercontent.com/u/40781705?v=4&size=64">
          </q-avatar>
          <div class="text-weight-bold">Vinícius S. Petini</div>
          <div>@petini96</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <RouterView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false)

</script>
