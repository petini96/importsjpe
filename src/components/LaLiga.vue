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
        <List description="BARCELONA" namecp="SelecoesEuropeias"
          photo="https://www.freepnglogos.com/uploads/barcelona-png/barcelona-logos-dream-league-soccer-cear-fotos-0.png"
          link="https://photos.app.goo.gl/1G4WJHJQuZBCGsYS8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="REAL MADRID" namecp="SelecoesEuropeias"
          photo="https://logodownload.org/wp-content/uploads/2016/03/Real-Madrid-logo-1.png"
          link="https://photos.app.goo.gl/i4zuNHqF2dxcrE3A6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ATLÉTICO MADRID" namecp="SelecoesEuropeias"
          photo="https://logodetimes.com/times/atletico-madrid/logo-atletico-madrid-1536.png"
          link="https://photos.app.goo.gl/oupZGYk2BmSdZB24A" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="SEVILLA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/ad/7b/f6/ad7bf6f0c1e989daa5848eeac9c85a3b.png"
          link="https://photos.app.goo.gl/MNNL28VHhn2ksX989" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="VILLAREAL" namecp="SelecoesEuropeias"
          photo="https://www.mrsoccer5.com/wp-content/uploads/2015/08/villarreal-cf-hd-logo.png"
          link="https://photos.app.goo.gl/9pyKEmXNbxG7Y98T8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="VALENCIA" namecp="SelecoesEuropeias"
          photo="https://i.pinimg.com/originals/af/b2/2b/afb22b6c74cd4c5133e933912f25dbdf.png"
          link="https://photos.app.goo.gl/RNj22A2Ts8HpbxYDA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="REAL SOCIEDADE" namecp="SelecoesEuropeias"
          photo="http://lofrev.net/wp-content/photos/2014/08/Real-Sociedad-de-Futbol-Logo-3D.png"
          link="https://photos.app.goo.gl/niuF1oCyY9qs1SWn6" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BETIS" namecp="SelecoesEuropeias"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png"
          link="https://photos.app.goo.gl/1HeqpoQHsxWX5azW9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ZARAGOZA" namecp="SelecoesEuropeias"
          photo="https://s.yimg.com/cv/apiv2/default/soccer/20181219/500x500/RealZaragoza_wbg.png"
          link="https://photos.google.com/share/AF1QipPjH1vTfmTD_85YSI6dfwIUzvaXbfYPCobALXmqxsM0SWEh92g6h-RFmCXWY2X-dg?key=YmgxSkxadGNfVU41Q0ZjamZqcER3bVUwWlltdDR3" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="OSASUNA" namecp="SelecoesEuropeias"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png"
          link="https://photos.app.goo.gl/qV1GKBndAdxRKKzr8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LA CORUNÃ" namecp="SelecoesEuropeias"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png"
          link="https://photos.app.goo.gl/UyQW7cRmFhu5qoN46" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ESPANYOL" namecp="SelecoesEuropeias"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png"
          link="https://photos.google.com/share/AF1QipMcnP-KtneFUW9RvXOxSYaDaufpMA8axq3_YzCUMH9aMfrwpJdK9iLdSVFb8y8cRw?key=MW00MlNGanVwZWpZbDhjc2JkVHRVS1NnX1dyek53" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="VIGO" namecp="SelecoesEuropeias"
          photo="https://s.yimg.com/cv/apiv2/default/soccer/20181127/500x500/CeltaVigo_wbg.png"
          link="https://photos.app.goo.gl/nxedm6FTTpNc6rGj7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ALMERIA" namecp="SelecoesEuropeias"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6832.png"
          link="https://photos.app.goo.gl/MN6oA8XDN23DTj2h9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="VALLADOLID" namecp="SelecoesEuropeias"
          photo="https://pbs.twimg.com/media/DyQU1XTX0AEIjDR.png"
          link="https://photos.app.goo.gl/Cg9Wpmic8J1s34eV8" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LAS PALMAS" namecp="SelecoesEuropeias"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png"
          link="https://photos.app.goo.gl/JJTendA5Cxg2uXpLA" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="GRANADA" namecp="SelecoesEuropeias"
          photo="https://s.yimg.com/cv/apiv2/default/soccer/20181219/500x500/Granada_wbg.png"
          link="https://photos.app.goo.gl/vBVBPo276oV9G4Nw7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="LEGANÉS" namecp="SelecoesEuropeias"
          photo="https://s.yimg.com/cv/apiv2/default/soccer/20181127/500x500/Leganes_wbg.png"
          link="https://photos.app.goo.gl/jjR18iTzJWukgKi29" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="CADIZ" namecp="SelecoesEuropeias"
          photo="https://s.yimg.com/cv/apiv2/default/soccer/20181219/500x500/Cadiz_wbg.png"
          link="https://photos.app.goo.gl/vx1PJWpyYQUfzDSM9" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="BILBAO" namecp="SelecoesEuropeias"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png"
          link="https://photos.app.goo.gl/LEFynNSF9apg2FKQ7" />
      </div>
      <div class="col-4 col-md-2  text-center">
        <List description="ALAVEZ" namecp="SelecoesEuropeias"
          photo="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png"
          link="https://photos.app.goo.gl/v6KHnDQ335anpuT36" />
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
