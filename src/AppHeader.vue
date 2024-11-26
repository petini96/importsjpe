<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
</template>

<style scoped>

</style>
<script>
export default {
  data() {
    return {
      whatsapp: "https://wa.me/556791315938",
      ok: false,
    }
  },
  methods: {
    handleWhatsappSubmit(e) {
      var texto = "*CONSULTA DE CAMISAS* \n \n Contato realizado pelo site...";
      texto = window.encodeURIComponent(texto);
      window.open(this.whatsapp + "?text=" + texto, "_blank");
    },
    handleRedirectBlankSubmit(link) {

      window.open(link, "_blank");
    },
    showMenuMobile() {
      if (this.ok) {
        this.ok = false;
      } else {
        this.ok = true;
      }
    },
  }
}

</script>