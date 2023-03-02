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
        <List description="BRASIL" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/84/22/6f/84226fb5835f7aa2c8e09b8aec9aaf30.png"
          link="https://photos.app.goo.gl/5D3vpWLVWdRWnXwT6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ARGENTINA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/3c/fc/51/3cfc514f25e6931cfb114bf1f5c5c853.png"
          link="https://photos.app.goo.gl/7EzRWXQFnPMf6T718" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="EUA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/85/d8/18/85d818127209ab647b52dde949249442.png"
          link="https://photos.google.com/share/AF1QipMvSBMAyNa6JOJAUvnrDbZAtnX40Sdwljrt4cUXgcNNdIxKkrj-HKndPs-_W2NyOw?key=YmdmM3dTZ01zMFpOZmtROGpLRXlmbklGMTVFVjZR" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="PARAGUAI" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/8c/42/3c/8c423c831bd6ace796f180b483bff019.png"
          link="https://photos.google.com/share/AF1QipMNcRxnAYKiuRirtLT2h47vVM_99QiCpEENihyeiqmnT7-JjaminnSV-FvzfvKT8A?key=ZDEzVmRpb1duWkxCeEptS2FWaGdfcHFWYnE4bHR3" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="COLOMBIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/b1/6d/de/b16dde3798dbe666474fde08d04cfc5b.png"
          link="https://photos.app.goo.gl/6cqEUop4kDrvho1H9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="PERU" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/df/80/24/df8024f334cb93242252e56555493cf4.png"
          link="https://photos.google.com/share/AF1QipMUWNj_WhNmxxnEaMLbgjCFOpvsSpYCM4Iy-harsjsiDaXzwaES7saXAAfJcCtrmA?key=RnFieXpaWnpRTE9rUWluS2NmVjdkR1FULW1kZklB" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="PANAMÁ" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/c9/c9/35/c9c935dad3b3a26235f7d26aba6cf072.png"
          link="https://photos.app.goo.gl/gGtTqVJ6Ypdng5Ww9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="MÉXICO" namecp="SelecoesEuropeias"
          photo="https://www.tipsbetting.co.uk/wp-content/uploads/2017/03/mexico-hd-logo.png"
          link="https://photos.app.goo.gl/hTesAB5f9tKjGFVq7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CHILE" namecp="SelecoesEuropeias"
          photo="https://clipart.info/images/ccovers/1503438058chile-football-logo-png.png"
          link="https://photos.app.goo.gl/u1pSmFX9oKZB8PvRA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="URUGUAI" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/57/25/ba/5725ba3b3d0b35fbaef48ace7e647278.png"
          link="https://photos.app.goo.gl/Aq2iWwXsgyGksf4V9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="EQUADOR" namecp="SelecoesEuropeias"
          photo="https://clipart.info/images/ccovers/1503438020ecuador-football-logo-png.png"
          link="https://photos.app.goo.gl/Py9aKQ25EXvGx95P7" />
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
