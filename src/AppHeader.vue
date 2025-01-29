<script lang="ts">
export default {
  data() {
    return {
      whatsapp: "https://wa.me/556791315938",
      ok: false,
    }
  },
  methods: {
    handleWhatsappSubmit(e: MouseEvent) {
      let texto = "*CONSULTA DE CAMISAS* \n \n Contato realizado pelo site...";
      texto = window.encodeURIComponent(texto);
      window.open(this.whatsapp + "?text=" + texto, "_blank");
      console.log(e);
    },
    handleRedirectBlankSubmit(link: string) {

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