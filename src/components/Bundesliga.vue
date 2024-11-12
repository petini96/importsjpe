<script setup>
import List from "./List.vue";
import { ref } from 'vue';
import { computed } from 'vue';
import BtnFooter from "./generics/BtnFooter.vue";

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
        <List description="BAYERN" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
          link="https://photos.app.goo.gl/VaF9wVnzvaV1MkFC8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BORUSSIA" namecp="FrancaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2017/02/bvb-borussia-dortmund-logo-1.png"
          link="https://photos.app.goo.gl/ppFLymeeguqRr8v57" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="HERTHA" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/de/thumb/3/38/Hertha_BSC_Logo.svg/1200px-Hertha_BSC_Logo.svg.png"
          link="https://photos.app.goo.gl/AiEDhcUz1FQJjaHEA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SCHALKE 04" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/FC_Schalke_04_Logo.png/1024px-FC_Schalke_04_Logo.png"
          link="https://photos.app.goo.gl/GMLZFHqENjwafBM96" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="MONCHEN" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/1200px-Borussia_M%C3%B6nchengladbach_logo.svg.png"
          link="https://photos.app.goo.gl/9BH6me1gRW2cuYWd9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="RB LEIPZIG" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/1200px-RB_Leipzig_2014_logo.svg.png"
          link="https://photos.app.goo.gl/yh1R85mbNyZfqS8R7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="FRANKFURT" namecp="FrancaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2019/11/eintracht-frankfurt-logo.png"
          link="https://photos.app.goo.gl/aqi1W7kfptWsosF6A" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="WERDER" namecp="FrancaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2019/12/werder-bremen-logo-4.png"
          link="https://photos.app.goo.gl/Wn891GkhXiZxrqjG9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LEVERKUSEN" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/1200px-Bayer_04_Leverkusen_logo.svg.png"
          link="https://photos.app.goo.gl/GGajjMgFd4gDkDaz9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="WOLFSBURG" namecp="FrancaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/VfL_Wolfsburg_Logo.svg/1200px-VfL_Wolfsburg_Logo.svg.png"
          link="https://photos.app.goo.gl/4Hxrz2h3E7gdFgHJA" />
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
      <BtnFooter></BtnFooter>
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
