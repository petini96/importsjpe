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
  <footer class="bg-white text-black p-3 w-100 text-center" :class="{ active: isActive, 'desactive': !isActive }">
    
    <div class="row justify-content-center align-items-center w-100 m-0">
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
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered p-3 ">
      <div class="modal-content bolerada-bg-black2 bolerada-border-gray">
        <div class="modal-header row justify-content-center align-items-center m-0">
          <div class="col-4 text-center">

            <img src="/src/assets/OFICIAL.png" alt="" class="img-fluid jump-animate" width="200" height="200">
          </div>
          <div class="col-6 text-start">
            <h5 class="modal-title fs-5 bolerada-cl-yellow" id="exampleModalLabel">Seleção de Catálogo</h5>
          </div>
          <div class="col-2 text-center">

            <button type="button" class="btn-close bolerada-bg-yellow" @click="sleepBG" data-bs-dismiss="modal"
              aria-label="Close"></button>

          </div>
        </div>
        <div class="modal-body">
          <div class="row justify-content-center align-items-center my-3">
            <div class="col-12 mb-3 text-center">
              <p class="text-white"><strong>Escolha entre uma das opções abaixo:</strong></p>
            </div>
            <div class="col-6 text-end">
              <!-- :to="{ name: 'leagues', params: { title: this.$store.state.leagueTitle, namecp: this.$store.state.leaguePicked, catalogPicked: 1 } }" -->
              <button @click="handlePageChange(1)" class="btn bolerada-bg-yellow" data-bs-dismiss="modal">
                OPÇÃO 1
              </button>
            </div>
            <div class="col-6 text-start">
              <button @click="handlePageChange(2)" class="btn bolerada-bg-yellow" data-bs-dismiss="modal">
                OPÇÃO 2
              </button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bolerada-bg-yellow border-dark" @click="sleepBG"
            data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
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
</style>