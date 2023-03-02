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
      <div class="col-4 col-md-2 text-center">
        <List description="HOLANDA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/be/13/f5/be13f5849901e0fd0ebfcd1e21c97cf9.png"
          link="https://photos.app.goo.gl/MHCBGk7rdiqVStbN8" />
      </div>

      <div class="col-4 col-md-2 text-center">
        <List description="INGLATERRA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/14/6f/b1/146fb143156bf059aad6d4ffd51d5986.png"
          link="https://photos.app.goo.gl/xXyht7AyAckvz1yx6" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List class="text" description="ITÁLIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/35/52/f1/3552f1b4a5a71fb8fca92bfc83091946.png"
          link="https://photos.app.goo.gl/uiUqWngnJKZFGJPeA" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="FRANÇA" namecp="SelecoesEuropeias"
          photo="https://1.bp.blogspot.com/-F1q5VAH2lig/Xvt7ZTQ2QDI/AAAAAAAB2tU/DUuBlC0D1IE8IrEMQEVyJ5ySH1FLMKM5ACLcBGAsYHQ/s1600/Fran%25C3%25A7a%2B%2528Sele%25C3%25A7%25C3%25A3o%2529.png"
          link="https://photos.app.goo.gl/BDGKuHreFh2SXhDL8" />
      </div>

      <div class="col-4 col-md-2 text-center">
        <List description="PORTUGAL" namecp="SelecoesEuropeias"
          photo="https://www.logolynx.com/images/logolynx/fe/fe20c304ef4f0fcadaa8df8ef60d7459.png"
          link="https://photos.app.goo.gl/uGGHmAxekygTXdcX9" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="ESPANHA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/8d/da/24/8dda24713a9a7a924963f8d876994665.png"
          link="https://photos.app.goo.gl/gdZ1uxGv4gQkMn54A" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="ALEMANHA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/12/7e/e9/127ee99d7825a98ded2d794699dbfeab.png"
          link="https://photos.app.goo.gl/QAWFiyFPstSeZywN6" />
      </div>

      <div class="col-4 col-md-2 text-center">
        <List description="CROÁCIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/68/8b/04/688b04d2816d1bb6b60ee96af2e9581a.png"
          link="https://photos.app.goo.gl/xPUJdeC2ctTjRVhdA" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="ÁUSTRIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/7a/a2/dc/7aa2dc105f8b3005304eaa0e41ee638c.png"
          link="https://photos.app.goo.gl/RDUR1ZDqV1EZ6RVC6" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="SUÉCIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/da/f6/4e/daf64e060fa5ea10b711ab8634892b4a.png"
          link="https://photos.app.goo.gl/ro8Nd3cKXnUmUvn69" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="ESCÓCIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/a0/e5/48/a0e548ee2611f289961e96479e506906.png"
          link="https://photos.app.goo.gl/p57RqUYKt8AHWVBZ6" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="BÉLGICA" namecp="SelecoesEuropeias"
          photo="https://1.bp.blogspot.com/-Lm8zuvmPAfI/XFSavVn-K0I/AAAAAAABiKQ/Lxfy-Epa3U0q2rScnAYcEORNiXDgDBFDACLcBGAs/s1600/belgic.png"
          link="https://photos.app.goo.gl/EBmAL1rhAb28NVS78" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="ESLOVÁQUIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/d8/42/4a/d8424ae4deeae7dc511792ddbe60caa9.png"
          link="https://photos.app.goo.gl/LBudwdWXY1PgS9vV7" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="SUÍÇA" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/suica/selecao-suica-de-futebol-512.png"
          link="https://photos.app.goo.gl/Jj4EbUGyDn7ZR5UA7" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="NORUEGA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/2f/1d/cb/2f1dcbf9e67792f1f7cef0211067249f.png"
          link="https://photos.app.goo.gl/PgziKedvbyickFz1A" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="TURQUIA" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Roundel_flag_of_Turkey.svg/500px-Roundel_flag_of_Turkey.svg.png"
          link="https://photos.app.goo.gl/9BUP1rpoE7KdvDDp8" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="ISLÂNDIA" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/pt/6/61/Iceland_National_Team_Logo_2020.png"
          link="https://photos.app.goo.gl/SJnd8xHLteSDCG2H7" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="IRLANDA DO NORTE" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/5c/80/b1/5c80b1bae77eab1a8982dbd3fdf51554.png"
          link="https://photos.app.goo.gl/LtxWmiGGsyExMJqz6" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="FINLÂNDIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/7e/90/f3/7e90f3add372c22599edfb6cf6a02487.png"
          link="https://photos.app.goo.gl/iqknCDCpzdBMyLpN8" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="UCRÂNIA" namecp="SelecoesEuropeias"
          photo="https://1.bp.blogspot.com/-vf3meENSGR0/Xd_OOuOs4JI/AAAAAAABtmc/KkoqB1Uy6_waMZbI1ogEBdlUY69dI4WMgCLcBGAsYHQ/s1600/Ucr%25C3%25A2nia%2BFedera%25C3%25A7%25C3%25A3o%2B%2528HD%2529.png"
          link="https://photos.app.goo.gl/YdCX8fuH8DvURM2p8" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="RÚSSIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/db/24/10/db24104dbfaa5f8fe1fe7d9a2ed87755.png"
          link="https://photos.app.goo.gl/nbMtqNn4sCQaWEbu5" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="IRLANDA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/19/3b/17/193b1794025a67bc325b331661921371.png"
          link="https://photos.app.goo.gl/peRsZGu6VKjqPJhe9" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="R. TCHECA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/f4/0d/f1/f40df1c91a77265b82825891a3775f7d.png"
          link="https://photos.app.goo.gl/8x85UDoCTRf4TVT88" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="GALES" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/82/18/06/821806444367a05c6541af59814e1aa2.png"
          link="https://photos.app.goo.gl/UAMkw4JALKifzKfK7" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="ROMÊNIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/ba/7c/43/ba7c4333a0891d01e7af1ff9eb77a45d.png"
          link="https://photos.app.goo.gl/gFtY1Kn7qNkjHBDG7" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="HUNGRIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/bb/e4/5f/bbe45f03bfdf32fedc679df097ca0885.png"
          link="https://photos.app.goo.gl/TtWayoZFmwXa18ft8" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="DINAMARCA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/e3/65/6b/e3656ba9f32ae2581086c1cad96d3993.png"
          link="https://photos.app.goo.gl/sJhm1eJc39bo2cpi9" />
      </div>
      <div class="col-4 col-md-2 text-center">
        <List description="POLÔNIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/58/09/a3/5809a359092332e66d8ed2157ab81cdb.png"
          link="https://photos.app.goo.gl/SKebRFRU3wcWyHoi9" />
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
