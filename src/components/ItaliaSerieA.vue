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
        <List description="MILAN" namecp="ItaliaSerieA"
          photo="https://logodetimes.com/times/associazione-calcio-milan/associazione-calcio-milan-4096.png"
          link="https://photos.app.goo.gl/1PkLb3oGLLVvw8b88" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="JUVENTUS" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/commons/9/99/Juventus_FC_2017_squared_icon_%28white%29.png"
          link="https://photos.app.goo.gl/5SzCDnjj744s6F96A" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ROMA" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/pt/8/8c/AS_Roma_logo.png"
          link="https://photos.app.goo.gl/VDdL9RQGeu2WNDkq8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="INTER DE MILÃO" namecp="ItaliaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2017/02/inter-milan-logo-1.png"
          link="https://photos.app.goo.gl/tTgeWnmFujyXGWGt5" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="PARMA" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/commons/4/40/Logo_Parma_Calcio_1913_%28adozione_2016%29.png"
          link="https://photos.app.goo.gl/ncnSTUsF2fFw172j7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SASSUOLO" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/US_Sassuolo_Calcio_logo.svg/1200px-US_Sassuolo_Calcio_logo.svg.png"
          link="https://photos.app.goo.gl/fi7YsscyLmaRUD72A" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LAZIO" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/pt/e/ed/SS_Lazio.png"
          link="https://photos.app.goo.gl/hN88v3TBTmRZ125B7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="TORINO" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Torino_FC_Logo.svg/1200px-Torino_FC_Logo.svg.png"
          link="https://photos.app.goo.gl/BE65jteRNvZ1xhDF8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CROTONE" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/FC_Crotone_logo.svg/1200px-FC_Crotone_logo.svg.png"
          link="https://photos.app.goo.gl/LJ7dQ9Qnu4Yx4Mq6A" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SPEZIA" namecp="ItaliaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2020/10/ac-spezia-logo-0.png"
          link="https://photos.app.goo.gl/ZBRLBXmngpaG7d748" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="FIORENTINA" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/pt/thumb/7/79/ACF_Fiorentina.svg/1200px-ACF_Fiorentina.svg.png"
          link="https://photos.app.goo.gl/CksPr6WY9PnBQowu7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ATALANTA" namecp="ItaliaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2020/03/atalanta-logo-1.png"
          link="https://photos.app.goo.gl/fRBKsCt5XJ4G3Tub7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BRESCIA" namecp="ItaliaSerieA"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Brescia_calcio_badge.svg/1200px-Brescia_calcio_badge.svg.png"
          link="https://photos.app.goo.gl/KXET5zL7cGxPaPSk9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BENEVENTO" namecp="ItaliaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2020/10/benevento-calcio-logo-0.png"
          link="https://photos.app.goo.gl/ZMwtrmtCwMdtje2A6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SAMPDORIA" namecp="ItaliaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2020/10/sampdoria-logo.png"
          link="https://photos.app.goo.gl/VquAu91AJbuZVpJx9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CAGLIARI" namecp="ItaliaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2020/10/cagliari-logo.png"
          link="https://photos.app.goo.gl/8FEkbTdgHkpdSBEc8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="GENOA" namecp="ItaliaSerieA"
          photo="https://logodownload.org/wp-content/uploads/2020/10/genoa-fc-logo-0.png"
          link="https://photos.app.goo.gl/Ubzk2pMWrZspRGxSA" />
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
