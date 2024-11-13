<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isSleeping = computed(() => store.getters.getIsSleeping);
const ok = computed(() => store.getters.getOk);
const isActive = computed(() => store.getters.getIsActive);
</script>

<template>
  <div class="bg-white text-black p-2 text-center">
    <strong>Aproveite -25% na nova temporada | Termina em 1d 18h 53m 20s | Saiba mais</strong>
  </div>
  <nav class="navbar bolerada-bg-black2 navbar-expand-lg bg-body-tertiary p-2" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo-imortsjpe.png" alt="" class="img-fluid" width="150" height="150">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/produtos">Produtos</router-link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
   
  <main :class="{ active: isSleeping, 'desactive': !isSleeping }">
    <RouterView />
  </main>
  
  <footer class="bg-white text-black p-3 w-100 text-center my-10" :class="{ active: isActive, 'desactive': !isActive }">
    <div class="row justify-content-center align-items-center w-100 my-5">
      <div class="col-12 col-md-4">
        <ul>
          <li>
            <h4>Dúvidas frequentes</h4>
            <hr>
          </li> 
          <p>Perguntas frequentes</p>
          <p>Devoluções</p>
          <p>Como comprar</p>
        </ul>

      </div>
      <div class="col-12 col-md-4">
        <ul>
          <li>
            <h4>Dúvidas frequentes</h4>
            <hr>
          </li> 
          <p>Perguntas frequentes</p>
          <p>Devoluções</p>
          <p>Como comprar</p>
        </ul>

      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ul>
          <hr>
          <li>
            <a @click="handleRedirectBlankSubmit('https://instagram.com/bolerada67_3.0')">
              <span>
                <font-awesome-icon icon="fa-brands fa-instagram" class="icon-mobile-md" />
                <span class="text-icon mx-3">importsjpe</span>
              </span>
            </a>
          </li>
          <li>
            <a @click="handleWhatsappSubmit">
              <span>
                <font-awesome-icon icon="fa-brands fa-whatsapp" class="icon-mobile-md" />
                <span class="text-icon mx-3">Whatsapp</span>
              </span>
            </a>
          </li>
          <li>

            <a @click="handleWhatsappSubmit">
              <span>
                <font-awesome-icon icon="fa-solid fa-mail-forward" class="icon-mobile-md" />
                <span class="text-icon mx-3">contato@importsjpe.com.br</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </footer>
   
</template>
 
<script>


export default {

  data() {
    return {
      whatsapp: "https://wa.me/556791315938",
    }
  },
  methods: {
    getIsSleeping() {
      this.$store.commit('getIsSleeping')
    },
    ok() {
      this.$store.commit('getOk')
    },
    isActive() {
      this.$store.commit('getIsActive')
      alert(this.$store.commit('getIsActive'))
    },
    handlePageChange(catalogPicked) {
      this.$store.commit('sleepBG')
      this.$router.push({
        name: 'leagues',
        params: { title: this.$store.state.leagueTitle, namecp: this.$store.state.leaguePicked, catalogPicked: catalogPicked },
      });
    },
    handleWhatsappSubmit(e) {
      var texto = "*CONSULTA DE CAMISAS* \n \n Contato realizado pelo site...";
      texto = window.encodeURIComponent(texto);
      window.open(this.whatsapp + "?text=" + texto, "_blank");
    },
    handleRedirectBlankSubmit(link) {
      window.open(link, "_blank");
    },
    showMenuMobile() {
      this.$store.commit('sleepBG');
      this.$store.commit('showMenuMobile');
    },
    sleepBG() {
      this.$store.commit('sleepBG');
    }
  }
}

</script>
<style scoped>
.bolerada-bg-yellow {
  background-color: #ffc100;
}

.bolerada-bg-black2 {
  background-color: #1c1c1c44 !important;
}

#navbarSupportedContent {
  font-size: 1.4em;
}

.my-10{
  margin-top: 10rem;
}
</style>