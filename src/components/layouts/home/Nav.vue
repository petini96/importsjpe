<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-white text-black p-2 text-center">
    <strong>Aproveite -25% na nova temporada | Termina em 1d 18h 53m 20s | Saiba mais</strong>
  </div>
  <nav class="navbar bolerada-bg-black2 navbar-expand-lg p-2" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="../../../assets/images/logo-imortsjpe.png" alt="" class="img-fluid" width="150" height="150">
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/produto">Produtos</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
