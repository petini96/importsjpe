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
        <List description="BOCA JR" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2016/10/boca-juniors-logo-escudo-1-1.png"
          link="https://photos.app.goo.gl/CMihwnby9yWRAbVn9" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="RIVER" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2015/05/river-plate-logo-6.png"
          link="https://photos.app.goo.gl/vMyq8xQJNz7pafWK9" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="PORTO" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2017/03/fc-porto-logo-1.png"
          link="https://photos.app.goo.gl/WMjhNCnamPR4NNc29" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="BENFICA" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/benfica/logo-benfica.png"
          link="https://photos.app.goo.gl/6vemmJL3BP8CGwtd8" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="AJAX" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/sco/thumb/7/79/Ajax_Amsterdam.svg/1200px-Ajax_Amsterdam.svg.png"
          link="https://photos.app.goo.gl/JxBimfDPPjpJieEi8" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="DIN.ZAGREB" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/commons/7/73/Dinamo_Zagreb_logo.png"
          link="https://photos.app.goo.gl/ZpXnL9fELnW7NYmj6" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="UNI.CHILE" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/pt/5/50/C.F._Universidad_de_Chile_logo.png"
          link="https://photos.app.goo.gl/7seC8iLVW28uciV68" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="SPORTING" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png"
          link="https://photos.app.goo.gl/ZtikmSouAHxM8r7N7" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="COLO COLO" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2017/02/colo-colo-logo-escudo-shield.png"
          link="https://photos.app.goo.gl/ahmi4pvmLe1L7rij7" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="RANGERS" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/pt/6/6c/Rangers_FC_logo.svg.png"
          link="https://photos.app.goo.gl/1Up47CPQhdyjYACJ6" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="CELTIC" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/pt/3/39/Celtic_FC_logo.png"
          link="https://photos.app.goo.gl/u3nr6FTrsyxfWEaG6" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="PSV" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/psv-eindhoven/logo-psv-eindhoven.png"
          link="https://photos.app.goo.gl/JjNSMtd2HARFevyw5" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="FENERBAHCE" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/tr/archive/8/86/20210803203947%21Fenerbah%C3%A7e_SK.png"
          link="https://photos.app.goo.gl/teji7qFD1B2Sn8mNA" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="RACING" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/racing-club-de-avellaneda/racing-club-de-avellaneda-2048.png"
          link="https://photos.app.goo.gl/FzDFxns1Ni4x78ux8" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="SANTA FÉ" namecp="SelecoesEuropeias"
          photo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2017/03/santa-f%C3%A9-escudo.png?fit=512%2C512&ssl=1"
          link="https://photos.app.goo.gl/2e1rWkSxjpCpkzxB7" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="AT.NACIONAL" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/atletico-nacional/logo-atletico-nacional-2048.png"
          link="https://photos.app.goo.gl/muUpTAe2uTP8zs2dA" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="ZENIT" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2020/03/fc-zenit-logo.png"
          link="https://photos.app.goo.gl/CMuNtKcH8ZRbd9qe8" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="AME.CALI" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2020/03/america-de-cali-logo-1.png"
          link="https://photos.app.goo.gl/JmhC1NNFiwFGDUKc8" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="LOK.MOSCOW" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/FC_Lokomotiv_Moscow_logo.svg/1200px-FC_Lokomotiv_Moscow_logo.svg.png"
          link="https://photos.app.goo.gl/gVccd1LHfp7KoiQs7" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="PEÑAROL" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Escudo_de_Pe%C3%B1arol.svg/1200px-Escudo_de_Pe%C3%B1arol.svg.png"
          link="https://photos.app.goo.gl/h1M88XrbUxYTqSP39" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="COLÓN" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2020/05/c-a-colon-logo.png"
          link="https://photos.app.goo.gl/bU5K9MURqGGhDZzR9" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="FEYENOORD" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/sco/thumb/e/e3/Feyenoord_logo.svg/1200px-Feyenoord_logo.svg.png"
          link="https://photos.app.goo.gl/iFqoKsLNvWsnAPDG7" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="AZ" namecp="SelecoesEuropeias"
          photo="https://i0.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/Logo-Az-Alkmaar.png?fit=512%2C512&ssl=1&resize=1280%2C720"
          link="https://photos.app.goo.gl/v5WzPpKP1vQrzsjV9" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="GALATASARAY" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galatasaray_Sports_Club_Logo.png/822px-Galatasaray_Sports_Club_Logo.png"
          link="https://photos.app.goo.gl/tvU5TJ9y8bnrjXAv9" />
      </div> 
      <div class="col-4 col-md-2  text-center">
        <List description="NOB" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Escudo_del_Club_Atl%C3%A9tico_Newell%27s_Old_Boys_de_Rosario.svg/1200px-Escudo_del_Club_Atl%C3%A9tico_Newell%27s_Old_Boys_de_Rosario.svg.png"
          link="https://photos.app.goo.gl/YZQrUBsAQZxgqbaa8" />
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
