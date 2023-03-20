<script setup>
import Catalog from '../components/Catalog.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <section>
    <div class="row justify-content-center">
      <picture class="col-12 col-md-8 col-lg-5">
      <img src="../assets/capa.png" alt="Flowers" class="img-fluid">
    </picture>
    </div>
  </section>

  <section>
    <div class="container my-5">
      <div class="row justify-content-center ">
        <div class="col-10 col-md-8 col-lg-5">
          <h1>Bolerada67</h1>
          <h4>Camisas de time de futebol, exclusivamente para você!</h4>
          <p>Camisas e artigos esportivos</p>
        </div>

      </div>
    </div>

  </section>
</template>

<style>
.text-icon {
  display: inline;
}

li {
  list-style: none;
}

.my-menu svg {
  width: 30px;
  position: fixed;
  z-index: 1;
  color: white;
  fill: #FFC100;
}

h1 {
  font-size: 3.5em;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
 

#figure {
  animation: borderAnimate 2s infinite;
}

@keyframes borderAnimate {
  0% {
    border: #0000 solid;
  }

  50% {
    border: #ffc100 solid;
  }

  100% {
    border: #0000 solid;
  }
}

.my-video2 {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  border: solid white 1px;
}

.catalogo-option {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
}

.catalogo-option span {
  font-size: 2em;
  margin-right: 5%;
  color: white;
}
</style>

