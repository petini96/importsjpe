<script setup>
import Catalog from '../components/Catalog.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <main>
    <h1>Bolerada67 - Site em Construção</h1>
    <h4>Estamos preparando o melhor para você...</h4>
    <p>Camisas e artigos esportivos</p>
    <!-- <div class="col-4">
            <video id="my-video2" class="my-video img-fluid " controls autoplay loop>
            <source src="../assets/fudeo.mp4" type="video/mp4">
          </video>
          </div> -->
    

  <!-- <div class="row">
    <RouterLink to="/catalog" class="col-12 mb-3" id="figure">
      <div class="catalogo-option ">
        <span>
          <font-awesome-icon icon="fa-solid fa-folder-tree" />
        </span>
        <h4 class="d-inline">CATÁLOGO</h4>
      </div>
    </RouterLink>
    
    <RouterLink to="/adm" class="col-12" id="figure">
                <div class="catalogo-option ">
                  <span>
                    <font-awesome-icon icon="fa-solid fa-lock" />
                  </span>
                  <h4 class="d-inline">ÁREA ADMINISTRATIVA</h4>
                </div>
              </RouterLink>
             </div> -->
  </main>
</template>

<style>
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