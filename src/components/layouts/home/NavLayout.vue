<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <q-header elevated>
    <q-toolbar>

      <!-- Logo e título -->
      <RouterLink class="navbar-brand" to="/">
        <q-avatar>
          <img src="../../../assets/images/logo_artesanal.jpg" alt="" class="img-fluid" width="250" height="150">
        </q-avatar>
      </RouterLink>

      <q-toolbar-title>
        <strong>Artesanal</strong> Doceria
      </q-toolbar-title>

      <!-- Ícones sociais com q-icon (Material Symbols v6) -->
      <div class="q-gutter-sm row items-center no-wrap">

        <q-btn flat round dense href="https://facebook.com" target="_blank" aria-label="Facebook">
          <q-icon name="public" />
        </q-btn>

        <q-btn flat round dense href="https://instagram.com" target="_blank" aria-label="Instagram">
          <q-icon name="alternate_email" />
        </q-btn>

        <q-btn flat round dense href="https://www.ifood.com.br" target="_blank" aria-label="iFood">
          <q-icon name="shopping_cart" />
        </q-btn>

        <q-btn flat round dense href="https://wa.me/5599999999999" target="_blank" aria-label="WhatsApp">
          <q-icon name="chat" />
        </q-btn>

        <q-btn flat round dense href="https://youtube.com" target="_blank" aria-label="YouTube">
          <q-icon name="smart_display" />
        </q-btn>

      </div>

    </q-toolbar>
  </q-header>
</template>
