<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <RouterLink class="navbar-brand" to="/">
        <q-avatar>
          <img src="../../../assets/images/logo_artesanal.jpg" alt="" class="img-fluid" width="250" height="150">
        </q-avatar>
      </RouterLink>
      <q-toolbar-title>
        <strong>Artesanal</strong> Doceria
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
