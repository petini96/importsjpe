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
        <List description="LIVERPOOL" namecp="SelecoesEuropeias"
          photo="https://s.yimg.com/cv/apiv2/default/soccer/20181127/500x500/Liverpool_wbg.png"
          link="https://photos.app.goo.gl/CNMrfus8Gpk4oi189" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CHELSEA" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2017/02/chelsea-fc-logo-1.png"
          link="https://photos.app.goo.gl/ncUPgpMRMGywojey5" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="MANCHESTER UNITED" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikibooks/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png"
          link="https://photos.app.goo.gl/ZgvWudsWkj1YwKLd8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="TOTTENHAM" namecp="SelecoesEuropeias"
          photo="https://www.logolynx.com/images/logolynx/be/be8821173fb8b6d6ece02e143435475b.png"
          link="https://photos.app.goo.gl/mA6QzQpNyiiPa3F97" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ARSENAL" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/arsenal-football-club/arsenal-football-club-4096.png"
          link="https://photos.app.goo.gl/UY83gvD8Bsu4CoJz6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="EVERTON" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/sco/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png"
          link="https://photos.app.goo.gl/399wrN8Qm5Kuanfw6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="MANCHESTER CITY" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
          link="https://photos.app.goo.gl/gk4zq94zEB3NZNpGA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="WOLVES" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2019/04/wolverhampton-logo-escudo.png"
          link="https://photos.app.goo.gl/ffSbUvjxSJUyDXZM9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="WEST HAM" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png"
          link="https://photos.app.goo.gl/8NmvZmJg2j8AyKxH9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="NEW CASTLE" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2019/10/newcastle-united-logo-1.png"
          link="https://photos.app.goo.gl/hZimNzaCAeS8M62v8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LEICESTER" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/leicester-city-football-club/leicester-city-football-club-4096.png"
          link="https://photos.app.goo.gl/ABWWByK5WeBv6aTbA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CRYSTAL PALACE" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/1200px-Crystal_Palace_FC_logo_%282022%29.svg.png"
          link="https://photos.app.goo.gl/TpAqwweicTS9dxHv5" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SOUTHAMPTON" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/1200px-FC_Southampton.svg.png"
          link="https://photos.app.goo.gl/5RUjeNciwfxSWWjC7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SHEFFIELD" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Sheffield_United_FC_logo.svg/1200px-Sheffield_United_FC_logo.svg.png"
          link="https://photos.app.goo.gl/CvKyz8BX8XjEHEBH7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LEEDS" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/1200px-Leeds_United_F.C._logo.svg.png"
          link="https://photos.app.goo.gl/ZHwySWww6d1vVNYN9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ASTON VILLA" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/aston-villa-football-club/aston-villa-football-club-4096.png"
          link="https://photos.app.goo.gl/yxUKNBWLCKH2EiTG8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="FULHAM" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2022/09/fulham-fc-logo.png"
          link="https://photos.app.goo.gl/G3jL9coNuQRtMSwM8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BROMWICH" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/pt/b/b1/West_Bromwich_Albion.png"
          link="https://photos.app.goo.gl/E3v36P5j6UJ5ZP7S7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="NORWICH" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Norwich_City_FC_logo.svg/1200px-Norwich_City_FC_logo.svg.png"
          link="https://photos.app.goo.gl/UJFkFLBjQfDJiCpN9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SUNDERLAND" namecp="SelecoesEuropeias"
          photo="https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Logo_Sunderland.svg/1200px-Logo_Sunderland.svg.png"
          link="https://photos.app.goo.gl/ur7rat1foSF8jiE29" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="DERBY COUNTY" namecp="SelecoesEuropeias"
          photo="https://www.footballlogosandkits.com/descargar.php?tipo=esc&idEscudo=1939&nombreEscudo=DERBY+COUNTY+F.C.&dominio=footballlogosandkits.com"
          link="https://photos.app.goo.gl/tCv1RbxtvMopT2up7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="NOTTINGHAM" namecp="SelecoesEuropeias"
          photo="https://i.imgur.com/qm1q8q2.png"
          link="https://photos.app.goo.gl/xL6ELeQwWtVBJEH39" />
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
