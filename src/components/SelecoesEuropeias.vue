<script setup>
import List from "./List.vue";
import { RouterLink, RouterView, stringifyQuery } from 'vue-router'
import { ref } from 'vue';
import BtnFooter from "./generics/BtnFooter.vue";

// const teams = ref([]);
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
    "HOLANDA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/be/13/f5/be13f5849901e0fd0ebfcd1e21c97cf9.png",
    "https://photos.app.goo.gl/MHCBGk7rdiqVStbN8"
  );

  addNewTeam(
    "INGLATERRA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/14/6f/b1/146fb143156bf059aad6d4ffd51d5986.png",
    "https://photos.app.goo.gl/xXyht7AyAckvz1yx6"
  );

  addNewTeam(
    "ITÁLIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/35/52/f1/3552f1b4a5a71fb8fca92bfc83091946.png",
    "https://photos.app.goo.gl/uiUqWngnJKZFGJPeA"
  );

  addNewTeam(
    "FRANÇA",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-F1q5VAH2lig/Xvt7ZTQ2QDI/AAAAAAAB2tU/DUuBlC0D1IE8IrEMQEVyJ5ySH1FLMKM5ACLcBGAsYHQ/s1600/Fran%25C3%25A7a%2B%2528Sele%25C3%25A7%25C3%25A3o%2529.png",
    "https://photos.app.goo.gl/BDGKuHreFh2SXhDL8"
  );

  addNewTeam(
    "PORTUGAL",
    "SelecoesEuropeias",
    "https://www.logolynx.com/images/logolynx/fe/fe20c304ef4f0fcadaa8df8ef60d7459.png",
    "https://photos.app.goo.gl/uGGHmAxekygTXdcX9"
  );

  addNewTeam(
    "ESPANHA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/8d/da/24/8dda24713a9a7a924963f8d876994665.png",
    "https://photos.app.goo.gl/gdZ1uxGv4gQkMn54A"
  );

  addNewTeam(
    "ALEMANHA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/12/7e/e9/127ee99d7825a98ded2d794699dbfeab.png",
    "https://photos.app.goo.gl/QAWFiyFPstSeZywN6"
  );

  addNewTeam(
    "CROÁCIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/68/8b/04/688b04d2816d1bb6b60ee96af2e9581a.png",
    "https://photos.app.goo.gl/xPUJdeC2ctTjRVhdA"
  );

  addNewTeam(
    "ÁUSTRIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/7a/a2/dc/7aa2dc105f8b3005304eaa0e41ee638c.png",
    "https://photos.app.goo.gl/RDUR1ZDqV1EZ6RVC6"
  );

  addNewTeam(
    "SUÉCIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/da/f6/4e/daf64e060fa5ea10b711ab8634892b4a.png",
    "https://photos.app.goo.gl/ro8Nd3cKXnUmUvn69"
  );

  addNewTeam(
    "ESCÓCIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/a0/e5/48/a0e548ee2611f289961e96479e506906.png",
    "https://photos.app.goo.gl/p57RqUYKt8AHWVBZ6"
  );

  addNewTeam(
    "BÉLGICA",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-Lm8zuvmPAfI/XFSavVn-K0I/AAAAAAABiKQ/Lxfy-Epa3U0q2rScnAYcEORNiXDgDBFDACLcBGAs/s1600/belgic.png",
    "https://photos.app.goo.gl/EBmAL1rhAb28NVS78"
  );

  addNewTeam(
    "ESLOVÁQUIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/d8/42/4a/d8424ae4deeae7dc511792ddbe60caa9.png",
    "https://photos.app.goo.gl/LBudwdWXY1PgS9vV7"
  );

  addNewTeam(
    "SUÍÇA",
    "SelecoesEuropeias",
    "https://logodetimes.com/times/suica/selecao-suica-de-futebol-512.png",
    "https://photos.app.goo.gl/Jj4EbUGyDn7ZR5UA7"
  );

  addNewTeam(
    "NORUEGA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/2f/1d/cb/2f1dcbf9e67792f1f7cef0211067249f.png",
    "https://photos.app.goo.gl/PgziKedvbyickFz1A"
  );

  addNewTeam(
    "TURQUIA",
    "SelecoesEuropeias",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Roundel_flag_of_Turkey.svg/500px-Roundel_flag_of_Turkey.svg.png",
    "https://photos.app.goo.gl/9BUP1rpoE7KdvDDp8"
  );

  addNewTeam(
    "ISLÂNDIA",
    "SelecoesEuropeias",
    "https://upload.wikimedia.org/wikipedia/pt/6/61/Iceland_National_Team_Logo_2020.png",
    "https://photos.app.goo.gl/SJnd8xHLteSDCG2H7"
  );

  addNewTeam(
    "IRLANDA DO NORTE",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/5c/80/b1/5c80b1bae77eab1a8982dbd3fdf51554.png",
    "https://photos.app.goo.gl/LtxWmiGGsyExMJqz6"
  );

  addNewTeam(
    "FINLÂNDIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/7e/90/f3/7e90f3add372c22599edfb6cf6a02487.png",
    "https://photos.app.goo.gl/iqknCDCpzdBMyLpN8"
  );

  addNewTeam(
    "UCRÂNIA",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-vf3meENSGR0/Xd_OOuOs4JI/AAAAAAABtmc/KkoqB1Uy6_waMZbI1ogEBdlUY69dI4WMgCLcBGAsYHQ/s1600/Ucr%25C3%25A2nia%2BFedera%25C3%25A7%25C3%25A3o%2B%2528HD%2529.png",
    "https://photos.app.goo.gl/YdCX8fuH8DvURM2p8"
  );

  addNewTeam(
    "RÚSSIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/db/24/10/db24104dbfaa5f8fe1fe7d9a2ed87755.png",
    "https://photos.app.goo.gl/nbMtqNn4sCQaWEbu5"
  );

  addNewTeam(
    "IRLANDA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/19/3b/17/193b1794025a67bc325b331661921371.png",
    "https://photos.app.goo.gl/peRsZGu6VKjqPJhe9"
  );

  addNewTeam(
    "R.TCHECA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/f4/0d/f1/f40df1c91a77265b82825891a3775f7d.png",
    "https://photos.app.goo.gl/8x85UDoCTRf4TVT88"
  );

  addNewTeam(
    "GALES",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/82/18/06/821806444367a05c6541af59814e1aa2.png",
    "https://photos.app.goo.gl/UAMkw4JALKifzKfK7"
  );

  addNewTeam(
    "ROMÊNIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/ba/7c/43/ba7c4333a0891d01e7af1ff9eb77a45d.png",
    "https://photos.app.goo.gl/gFtY1Kn7qNkjHBDG7"
  );

  addNewTeam(
    "HUNGRIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/bb/e4/5f/bbe45f03bfdf32fedc679df097ca0885.png",
    "https://photos.app.goo.gl/TtWayoZFmwXa18ft8"
  );

  addNewTeam(
    "DINAMARCA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/e3/65/6b/e3656ba9f32ae2581086c1cad96d3993.png",
    "https://photos.app.goo.gl/sJhm1eJc39bo2cpi9"
  );

  addNewTeam(
    "POLÔNIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/58/09/a3/5809a359092332e66d8ed2157ab81cdb.png",
    "https://photos.app.goo.gl/SKebRFRU3wcWyHoi9"
  );
  
}
if (catalogPicked.catalogPicked == 2) {
  
  addNewTeam(
    "HOLANDA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/be/13/f5/be13f5849901e0fd0ebfcd1e21c97cf9.png",
    "https://drive.google.com/drive/folders/1BJb4cQ3KkP1UR9-bTppfTA-pgGUlrTOP?usp=sharing"
  );

  addNewTeam(
    "INGLATERRA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/14/6f/b1/146fb143156bf059aad6d4ffd51d5986.png",
    "https://drive.google.com/drive/folders/1Y4GCvXZeb10lFltNFk_krh20Ypcv7tAs?usp=sharing"
  );

  addNewTeam(
    "ITÁLIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/35/52/f1/3552f1b4a5a71fb8fca92bfc83091946.png",
    "https://drive.google.com/drive/folders/17FEetpV3AobBq3YIEOBC2V0LkG2-F8QP?usp=sharing"
  );

  addNewTeam(
    "FRANÇA",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-F1q5VAH2lig/Xvt7ZTQ2QDI/AAAAAAAB2tU/DUuBlC0D1IE8IrEMQEVyJ5ySH1FLMKM5ACLcBGAsYHQ/s1600/Fran%25C3%25A7a%2B%2528Sele%25C3%25A7%25C3%25A3o%2529.png",
    "https://drive.google.com/drive/folders/18qUH6c64Z1tww41dY7pqrZN3_9uDQeeh?usp=sharing"
  );

  addNewTeam(
    "PORTUGAL",
    "SelecoesEuropeias",
    "https://www.logolynx.com/images/logolynx/fe/fe20c304ef4f0fcadaa8df8ef60d7459.png",
    "https://drive.google.com/drive/folders/1zUHsfqe9EAZKgQ3TnRI2HfpjRkcvz2G3?usp=sharing"
  );

  addNewTeam(
    "ESPANHA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/8d/da/24/8dda24713a9a7a924963f8d876994665.png",
    "https://drive.google.com/drive/folders/1MlVJ0_Jh981Z77nkTYNBkyJr2Cp9Hthk?usp=sharing"
  );

  addNewTeam(
    "ALEMANHA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/12/7e/e9/127ee99d7825a98ded2d794699dbfeab.png",
    "https://drive.google.com/drive/folders/1b0PeigMAblxISHyJkfbXwZ0bHsTXHmvV?usp=sharing"
  );

  addNewTeam(
    "CROÁCIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/68/8b/04/688b04d2816d1bb6b60ee96af2e9581a.png",
    "https://drive.google.com/drive/folders/1uGtKe5JpEK3dLB29USk9ad0TrqhhqDfL?usp=sharing"
  );

  addNewTeam(
    "SUÉCIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/da/f6/4e/daf64e060fa5ea10b711ab8634892b4a.png",
    "https://drive.google.com/drive/folders/1bTOh1l1dXBlF9Y1HKDmaGhA723Pxe-ob?usp=sharing"
  );
 
  addNewTeam(
    "BÉLGICA",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-Lm8zuvmPAfI/XFSavVn-K0I/AAAAAAABiKQ/Lxfy-Epa3U0q2rScnAYcEORNiXDgDBFDACLcBGAs/s1600/belgic.png",
    "https://drive.google.com/drive/folders/14S_16OF6n8mkXFWOvXleG72iaYwr3rnS?usp=sharing"
  );

  addNewTeam(
    "NORUEGA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/2f/1d/cb/2f1dcbf9e67792f1f7cef0211067249f.png",
    "https://drive.google.com/drive/folders/1belk0yhMCQ929ga9t8ykzXHF3BZqHPx1?usp=sharing"
  );

  addNewTeam(
    "TURQUIA",
    "SelecoesEuropeias",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Roundel_flag_of_Turkey.svg/500px-Roundel_flag_of_Turkey.svg.png",
    "https://drive.google.com/drive/folders/1xRvJs6YkgcuFYb4R1_QgFWxRr052xKqu?usp=sharing"
  );
          
  addNewTeam(
    "DINAMARCA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/e3/65/6b/e3656ba9f32ae2581086c1cad96d3993.png",
    "https://drive.google.com/drive/folders/1V5A7E7b2oTr4dTK_v6GDdFTiOQptybJL?usp=sharing"
  );

  addNewTeam(
    "R.TCHECA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/f4/0d/f1/f40df1c91a77265b82825891a3775f7d.png",
    "https://drive.google.com/drive/folders/1-Zww8P314BOqf4wEl8sdMT0ZHWilHT1p?usp=sharing"
  );

  addNewTeam(
    "GALES",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/82/18/06/821806444367a05c6541af59814e1aa2.png",
    "https://drive.google.com/drive/folders/1zXx4zkv2W1tZf8bb_VgOT2FM4NkZg7XH?usp=sharing"
  );

  addNewTeam(
    "POLÔNIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/58/09/a3/5809a359092332e66d8ed2157ab81cdb.png",
    "https://drive.google.com/drive/folders/15LTF3elVZ-0Gzu3IDNOgylGap-6ulE_G?usp=sharing"
  );

  addNewTeam(
    "OUTROS",
    "SelecoesEuropeias",
    "https://upload.wikimedia.org/wikipedia/pt/1/17/UEFA_logo.svg.png",
    "https://drive.google.com/drive/folders/1om0HCE2Rg_qDy7WEjB6c3Qg942_o6MJ_?usp=sharing"
  );
}



const scrollToTop = function () {
  window.scrollTo(0, 0);
};
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

<script>

export default {
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
      teams: []
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
