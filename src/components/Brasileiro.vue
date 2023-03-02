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
        <List description="FLAMENGO" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-novo.png"
          link="https://photos.app.goo.gl/Lnx5rTjUcmz3CguF8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="PALMEIRAS" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-4.png"
          link="https://photos.app.goo.gl/xDZp8sPs53imCmyw5" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SÃO PAULO" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/sao-paulo/logo-sao-paulo-4096.png"
          link="https://photos.app.goo.gl/JgjvoaGLhKS2AfBm8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="GRÊMIO" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2017/02/gremio-logo-escudo.png"
          link="https://photos.app.goo.gl/562Q4HNYxaz4ftd9A" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="VASCO" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-1.png"
          link="https://photos.app.goo.gl/QYJvxbattCNVLqsG6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ATLÉTICO MINEIRO" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-4096.png"
          link="https://photos.app.goo.gl/ji4NPuhdUcF4ZP2TA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="INTERNACIONAL" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/internacional/logo-internacional-4096.png"
          link="https://photos.app.goo.gl/e4xTbmhsDKNQ6NYu8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CORINTHIANS" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2016/11/corinthians-logo-01.png"
          link="https://photos.app.goo.gl/gNAPYeosXUiZTQZ9A" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="FLUMINENSE" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2016/09/fluminense-logo-escudo-1.png"
          link="https://photos.app.goo.gl/4KSwVjfufXUarjjVA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BAHIA" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/bahia/logo-bahia-4096.png"
          link="https://photos.app.goo.gl/mCyFp2i2W9uQuzTV8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ATHLÉTICO PARANAENSE" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/atletico-paranaense/logo-atletico-paranaense-4096.png"
          link="https://photos.app.goo.gl/PRkoNTFyHwL4wcWTA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CEARÁ" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cear%C3%A1_Sporting_Club_logo.svg/1845px-Cear%C3%A1_Sporting_Club_logo.svg.png"
          link="https://photos.app.goo.gl/8YaBZYxgXE5e8d537" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CHAPECOENSE" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/chapecoense/logo-chapecoense-1536.png"
          link="https://photos.app.goo.gl/bCnkeopRKgTD7M1r9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BOTAFOGO" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1816px-Botafogo_de_Futebol_e_Regatas_logo.svg.png"
          link="https://photos.app.goo.gl/jvS8ikLo4m3cT8TF6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="FORTALEZA" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/fortaleza/logo-fortaleza-4096.png"
          link="https://photos.app.goo.gl/3J5DxTZppqxgQSWs5" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SPORT" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2017/02/sport-recife-logo-escudo-5.png"
          link="https://photos.app.goo.gl/71U75RfATuaJmetv8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SANTOS" namecp="SelecoesEuropeias"
          photo="https://media.santosfc.com.br/wp-content/uploads/2022/04/Escudo-sem-estrelas229x220-1.png"
          link="https://photos.app.goo.gl/8LrCsqZdDkbnnGKV7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BRAGANTINO" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2020/01/red-bull-bragantino-logo-0.png"
          link="https://photos.app.goo.gl/PCsV5mn9h7g4jiF87" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CRUZEIRO" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-escudo-5-.png"
          link="https://photos.app.goo.gl/xFrbrdn5QLfvdQkg9" />
      </div>
      
      <div class="col-4 col-md-2  text-center">
        <List description="VITORIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/24/13/77/2413777e5ab821eccf398ef05f701ae3.png"
          link="https://photos.app.goo.gl/SZDss6J3vrwRwoVQ6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="GUARANI" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2017/02/Guarani-fc-logo-esudo-1.png"
          link="https://photos.app.goo.gl/9SaLts9uU5tHxbkf9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SANTA CRUZ" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2017/02/Santa-Cruz-fc-logo-escudo.png"
          link="https://photos.app.goo.gl/asFnjFQHg6PzzVgM9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="NÁUTICO" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/nautico/logo-nautico-4096.png"
          link="https://photos.app.goo.gl/dG5mrwyCabUK1h7M6" />
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
