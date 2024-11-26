<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue';
import { useStore } from 'vuex';
import Nav from './components/layouts/home/Nav.vue';
import Footer from './components/layouts/home/Footer.vue';

const store = useStore();
const isSleeping = computed(() => store.getters.getIsSleeping);

</script>

<template>
  <Nav />
  <main :class="{ active: isSleeping, 'desactive': !isSleeping }">
    <RouterView />
  </main>
  <Footer />
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

.my-10 {
  margin-top: 10rem;
}
</style>