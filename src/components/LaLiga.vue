<script setup>
import List from "./List.vue";
import { ref } from 'vue';
import { computed } from 'vue';
import BtnFooter from "./generics/BtnFooter.vue";

import { RouterLink, RouterView } from 'vue-router'
const scrollToTop = function () {
  window.scrollTo(0, 0);
};


const teams = []

const catalogPicked = defineProps(['catalogPicked'])

const addNewTeam = (description, namecp, photo, link) => {
  const newTeam = {
    description: description,
    namecp: namecp,
    photo: photo,
    link: link,
  };
  teams.push(newTeam);
}


if (catalogPicked.catalogPicked == 1) {


  addNewTeam(
    "BARCELONA",
    "SelecoesEuropeias",
    "https://www.freepnglogos.com/uploads/barcelona-png/barcelona-logos-dream-league-soccer-cear-fotos-0.png",
    "https://photos.app.goo.gl/1G4WJHJQuZBCGsYS8"
  );
  addNewTeam(
    "REAL MADRID",
    "SelecoesEuropeias",
    "https://logodownload.org/wp-content/uploads/2016/03/Real-Madrid-logo-1.png",
    "https://photos.app.goo.gl/i4zuNHqF2dxcrE3A6"
  );
  addNewTeam(
    "ATLÉTICO MADRID",
    "SelecoesEuropeias",
    "https://logodetimes.com/times/atletico-madrid/logo-atletico-madrid-1536.png",
    "https://photos.app.goo.gl/oupZGYk2BmSdZB24A"
  );
  addNewTeam(
    "SEVILLA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/ad/7b/f6/ad7bf6f0c1e989daa5848eeac9c85a3b.png",
    "https://photos.app.goo.gl/MNNL28VHhn2ksX989"
  );
  addNewTeam(
    "VILLAREAL",
    "SelecoesEuropeias",
    "https://www.mrsoccer5.com/wp-content/uploads/2015/08/villarreal-cf-hd-logo.png",
    "https://photos.app.goo.gl/9pyKEmXNbxG7Y98T8"
  );
  addNewTeam(
    "VALENCIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/af/b2/2b/afb22b6c74cd4c5133e933912f25dbdf.png",
    "https://photos.app.goo.gl/RNj22A2Ts8HpbxYDA"
  );
  addNewTeam(
    "REAL SOCIEDADE",
    "SelecoesEuropeias",
    "http://lofrev.net/wp-content/photos/2014/08/Real-Sociedad-de-Futbol-Logo-3D.png",
    "https://photos.app.goo.gl/niuF1oCyY9qs1SWn6"
  );
  addNewTeam(
    "BETIS",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
    "https://photos.app.goo.gl/1HeqpoQHsxWX5azW9"
  );
  addNewTeam(
    "ZARAGOZA",
    "SelecoesEuropeias",
    "https://s.yimg.com/cv/apiv2/default/soccer/20181219/500x500/RealZaragoza_wbg.png",
    "https://photos.google.com/share/AF1QipPjH1vTfmTD_85YSI6dfwIUzvaXbfYPCobALXmqxsM0SWEh92g6h-RFmCXWY2X-dg?key=YmgxSkxadGNfVU41Q0ZjamZqcER3bVUwWlltdDR3"
  );
  addNewTeam(
    "OSASUNA",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
    "https://photos.app.goo.gl/qV1GKBndAdxRKKzr8"
  );
  addNewTeam(
    "LA CORUNÃ",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
    "https://photos.app.goo.gl/UyQW7cRmFhu5qoN46"
  );
  addNewTeam(
    "ESPANYOL",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
    "https://photos.google.com/share/AF1QipMcnP-KtneFUW9RvXOxSYaDaufpMA8axq3_YzCUMH9aMfrwpJdK9iLdSVFb8y8cRw?key=MW00MlNGanVwZWpZbDhjc2JkVHRVS1NnX1dyek53"
  );
  addNewTeam(
    "VIGO",
    "SelecoesEuropeias",
    "https://s.yimg.com/cv/apiv2/default/soccer/20181127/500x500/CeltaVigo_wbg.png",
    "https://photos.app.goo.gl/nxedm6FTTpNc6rGj7"
  );
  addNewTeam(
    "ALMERIA",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6832.png",
    "https://photos.app.goo.gl/MN6oA8XDN23DTj2h9"
  );
  addNewTeam(
    "VALLADOLID",
    "SelecoesEuropeias",
    "https://pbs.twimg.com/media/DyQU1XTX0AEIjDR.png",
    "https://photos.app.goo.gl/Cg9Wpmic8J1s34eV8"
  );
  addNewTeam(
    "LAS PALMAS",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
    "https://photos.app.goo.gl/JJTendA5Cxg2uXpLA"
  );
  addNewTeam(
    "GRANADA",
    "SelecoesEuropeias",
    "https://s.yimg.com/cv/apiv2/default/soccer/20181219/500x500/Granada_wbg.png",
    "https://photos.app.goo.gl/vBVBPo276oV9G4Nw7"
  );
  addNewTeam(
    "LEGANÉS",
    "SelecoesEuropeias",
    "https://s.yimg.com/cv/apiv2/default/soccer/20181127/500x500/Leganes_wbg.png",
    "https://photos.app.goo.gl/jjR18iTzJWukgKi29"
  );
  addNewTeam(
    "CADIZ",
    "SelecoesEuropeias",
    "https://s.yimg.com/cv/apiv2/default/soccer/20181219/500x500/Cadiz_wbg.png",
    "https://photos.app.goo.gl/vx1PJWpyYQUfzDSM9"
  );
  addNewTeam(
    "BILBAO",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
    "https://photos.app.goo.gl/LEFynNSF9apg2FKQ7"
  );
  addNewTeam(
    "ALAVEZ",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
    "https://photos.app.goo.gl/v6KHnDQ335anpuT36"
  );


}

if (catalogPicked.catalogPicked == 2) {

  addNewTeam(
    "BARCELONA",
    "SelecoesEuropeias",
    "https://www.freepnglogos.com/uploads/barcelona-png/barcelona-logos-dream-league-soccer-cear-fotos-0.png",
    "https://drive.google.com/drive/folders/1fng984bVR-Y_fwJce1z9Cb_zoCMsyioR?usp=sharing"
  );
  addNewTeam(
    "REAL MADRID",
    "SelecoesEuropeias",
    "https://logodownload.org/wp-content/uploads/2016/03/Real-Madrid-logo-1.png",
    "https://drive.google.com/drive/folders/18-mmHc26FVy2XWI8egRKpzRY117V-azG?usp=sharing"
  );
  addNewTeam(
    "ATLÉTICO MADRID",
    "SelecoesEuropeias",
    "https://logodetimes.com/times/atletico-madrid/logo-atletico-madrid-1536.png",
    "https://drive.google.com/drive/folders/1dMRwuIolk-8LFWdP8Srn7JLPhssQ9A7O?usp=sharing"
  );
  addNewTeam(
    "SEVILLA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/ad/7b/f6/ad7bf6f0c1e989daa5848eeac9c85a3b.png",
    "https://drive.google.com/drive/folders/1c-vlO1TdpMkdCN0skuMp2S3nZ6Bfht_D?usp=sharing"
  );
  addNewTeam(
    "VILLAREAL",
    "SelecoesEuropeias",
    "https://www.mrsoccer5.com/wp-content/uploads/2015/08/villarreal-cf-hd-logo.png",
    "https://drive.google.com/drive/folders/1S5KjJPUGaHnwREIsOEe1Aphtun42kiJs?usp=sharing"
  );
  addNewTeam(
    "VALENCIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/af/b2/2b/afb22b6c74cd4c5133e933912f25dbdf.png",
    "https://drive.google.com/drive/folders/1nkTcl0Vhiy9VfBUtVGpbSA_NDfnMlfX_?usp=sharing"
  );
  addNewTeam(
    "REAL SOCIEDADE",
    "SelecoesEuropeias",
    "http://lofrev.net/wp-content/photos/2014/08/Real-Sociedad-de-Futbol-Logo-3D.png",
    "https://drive.google.com/drive/folders/1so6maz_TFdff8pm4b8dCGEyw296fQgx7?usp=sharing"
  );
  addNewTeam(
    "BETIS",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
    "https://drive.google.com/drive/folders/13PxzE2lgPiatWuhSKIZ1Bu0kKY_yyMAt?usp=sharing"
  );  
  addNewTeam(
    "ESPANYOL",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
    "https://drive.google.com/drive/folders/1e4EQ0y7EbBtPGO7MJdXvif5xEZiDDsQ0?usp=sharing"
  );
  addNewTeam(
    "VIGO",
    "SelecoesEuropeias",
    "https://s.yimg.com/cv/apiv2/default/soccer/20181127/500x500/CeltaVigo_wbg.png",
    "https://drive.google.com/drive/folders/1e4EQ0y7EbBtPGO7MJdXvif5xEZiDDsQ0?usp=sharing"
  );
  addNewTeam(
    "GRANADA",
    "SelecoesEuropeias",
    "https://s.yimg.com/cv/apiv2/default/soccer/20181219/500x500/Granada_wbg.png",
    "https://drive.google.com/drive/folders/1JmxBXqJLmU4lqPUcrLLFfD7J_1BLyTyJ?usp=sharing"
  );
  addNewTeam(
    "BILBAO",
    "SelecoesEuropeias",
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
    "https://drive.google.com/drive/folders/1p2Y7tUYpzNoGsQHCDvoq2Oaun14dzDYD?usp=sharing"
  );

}

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
      picked: null,
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
      var agora = "https://m.media-amazon.com/images/I/510HStL3cnL._AC_SY606_.jpg";
      var texto = "*CONSULTA DE CAMISAS* \n \n Contato realizado pelo senhor(a) " + this.name + "....\n *Nome da camisa:* " + this.shirt + "\n *Versão:* " + this.version + "\n *Gênero:* " + this.picked + "\n *Imagem:* " + this.url;
      texto = window.encodeURIComponent(texto);
      window.open(this.whatsapp + "?text=" + texto, "_blank");
    }
  }
}

</script>
<template>
  <div class="container my-5">
    <div class="row align-items-center">
      <div class="col-4 col-md-2 text-center" v-for="(item, index) in teams">
        <List :description="item.description" :namecp="item.namecp" :photo="item.photo" :link="item.link" />
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
                <span class="mt-2">{{ value.name }}</span>
              </div>
              <div class="col-10 p-2">
                <input type="text" name="name" id="name" class="rounded bolerada-input" placeholder="Digite o seu nome"
                  v-model="name">
              </div>
              <div class="col-10 p-2">
                <input type="text" name="shirt" id="shirt" class="rounded bolerada-input"
                  placeholder="Digite o nome da camisa" v-model="shirt">
              </div>
              <div class="col-10 p-2">
                <input type="text" name="version" id="version" class="rounded bolerada-input"
                  placeholder="Digite o modelo" v-model="version">
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
