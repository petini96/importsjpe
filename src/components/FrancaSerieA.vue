<script setup>
import List from "./List.vue";
import { ref } from 'vue';
import { computed } from 'vue';

import { RouterLink, RouterView } from 'vue-router'
const scrollToTop = function () {
  window.scrollTo(0, 0);
};
</script>  
<script>
export default {
  // props: {
  //   // Using value here allows us to be v-model compatible.
  //   value: File
  // },
  data() {
    return {
      checked: false,
      value: null,
      url: null,
      picked:null,
      whatsapp: "https://wa.me/556791315938",
      name: "",
      version: "",
      shirt: "",
    }
  },
  methods: {
    handleFileChange(e) {
      this.value = e.target.files[0];
      this.url = URL.createObjectURL(this.value);
    },
    handleWhatsappSubmit(e) {
      var agora= "https://m.media-amazon.com/images/I/510HStL3cnL._AC_SY606_.jpg";
      var texto = "*CONSULTA DE CAMISAS* \n \n Contato realizado pelo senhor(a) "+this.name+"....\n *Nome da camisa:* "+ this.shirt + "\n *Versão:* "+ this.version + "\n *Gênero:* " + this.picked + "\n *Imagem:* "+ this.url;
      texto = window.encodeURIComponent(texto);
      window.open(this.whatsapp +"?text="+texto,"_blank");
    }
  }
}

</script>
<template>
  <div class="container my-5">
     
    <div class="row align-items-center">
      <div class="col-4 col-md-2  text-center">
        <List description="PSG" namecp="FrancaSerieA"
          photo="https://logodetimes.com/times/paris-saint-germain/paris-saint-germain-2048.png"
          link="https://photos.app.goo.gl/jsRTfZy4dNYdKRX58" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="OLYMPIQUE" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/pt/f/f7/Olympique_Marseille_logo.png"
          link="https://photos.app.goo.gl/wsVx7XgQahFyqvxn7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="MONACO" namecp="FrancaSerieA"
          photo="https://logodetimes.com/times/as-monaco/as-monaco-4096.png"
          link="https://photos.app.goo.gl/aEZmikyL5KAK4ZUo7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LYON" namecp="FrancaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2019/09/lyon-logo-0.png"
          link="https://photos.app.goo.gl/64CRydJT5kKcXwie9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LILLE" namecp="FrancaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2019/09/lille-logo.png"
          link="https://photos.app.goo.gl/sLr5FFgjcZmHR93v6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="RENNAIS" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Stade_Rennais_FC.svg/1200px-Stade_Rennais_FC.svg.png"
          link="https://photos.app.goo.gl/iTgLCNNhdWtTBY6KA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="STRASBOURG" namecp="FrancaSerieA"
          photo="https://logodetimes.com/times/rc-strasbourg-alsace/rc-strasbourg-alsace-4096.png"
          link="https://photos.app.goo.gl/LtvS7oHXaPo5xXiC8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="GUINGAMP" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/En_Avant_Guingamp_logo.svg/1200px-En_Avant_Guingamp_logo.svg.png"
          link="https://photos.app.goo.gl/4m4anWdQpb2RSjZp9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="NANTES" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/commons/6/68/FC-Nantes-blason-rvb.png"
          link="https://photos.app.goo.gl/ejRf5Nd5WNNx3fj76" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LENS" namecp="FrancaSerieA"
          photo="https://logodetimes.com/times/racing-club-de-lens/racing-club-de-lens-2048.png"
          link="https://photos.app.goo.gl/acLhP1EeMcFCFcqN6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BORDEAUX" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/sco/thumb/1/11/FC_Girondins_de_Bordeaux_logo.svg/1200px-FC_Girondins_de_Bordeaux_logo.svg.png"
          link="https://photos.app.goo.gl/LK9DKvoWpyghjWMK9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LORIENT" namecp="FrancaSerieA"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/273.png"
          link="https://photos.app.goo.gl/p9EC9XQdUqeny72V6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SAINT ETIENNE" namecp="FrancaSerieA"
          photo="https://logodetimes.com/times/as-saint-etienne/as-saint-etienne-4096.png"
          link="https://photos.app.goo.gl/QC8RmjKbdoY4gNVe8" />
      </div>
       
       
       
       
    </div>

    <div class="row justify-content-end align-items-center">
      <div class="col-12 text-center mb-5">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox" class="mx-3 text-danger"> <strong>NÃO ENCONTREI O MEU MANTO</strong></label>
        <!-- <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox"> Não encontrei o meu manto</label>

  
        <input v-if="checked" type="file" @change="handleFileChange"> -->
        <label v-if="checked" class="file-select">
          <div class="select-button">
            <div v-if="value" class="row justify-content-center">
              <div class="col-10">
                <img :src="url" width="150">
              </div>
              <div class="col-10 p-2">
                <span class="mt-2">{{value.name}}</span>
              </div>
              <div class="col-10 p-2">
                <input type="text" name="name" id="name" class="rounded bolerada-input"
                  placeholder="Digite o seu nome" v-model="name">
              </div>
              <div class="col-10 p-2">
                <input type="text" name="shirt" id="shirt" class="rounded bolerada-input"
                  placeholder="Digite o nome da camisa" v-model="shirt">
              </div>
              <div class="col-10 p-2">
                <input type="text" name="version" id="version" class="rounded bolerada-input" placeholder="Digite o modelo" v-model="version">
              </div>
              <div class="col-10 p-2">
                <input type="radio" id="m" value="M" v-model="picked" />
                <label for="M">Masculino</label>

                <input type="radio" id="f" value="F" v-model="picked" class="mx-2" />
                <label for="F">Feminino</label>
              </div>
              <div class="col-10 p-2">
                <a @click="handleWhatsappSubmit"><span style="font-size: 1.5em;">
                  <i class="bi bi-whatsapp"></i>
                </span>CONSULTAR</a>
                 
              </div>
            </div>
            <span v-else>Click aqui para enviar sua foto</span>
          </div>
          <input type="file" @change="handleFileChange" />
        </label>
      </div>
      <div class="col-3 text-center ">
        <RouterLink to="/">
          <div class="box-button">
            <span>
              <i class="bi bi-arrow-return-left"></i>
            </span>
          </div>
        </RouterLink>
      </div>

      <div class="col-3 text-center">
        <a v-on:click="scrollToTop()">
          <div class="box-button">
            <span>
              <i class="bi bi-arrow-90deg-up"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.file-select>.select-button {
  padding: 1rem;
  margin-top: 30px;
  color: #ffc100;
  background-color: rgba(0, 0, 0, 0.6);

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select>input[type="file"] {
  display: none;
}

.box-button {
  position: relative;
  /* float: right; */
  background-color: rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ffc100;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.box-button span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 2em;

}

.box-button span i {

  color: #ffc100;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.bolerada-input {
  background-color: rgba(0, 0, 0, 0.2);
  color: #ffc100;
  border: 1px solid #ffc100;
  text-align: center;
  padding: 10px;
}
</style>
