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
      "SENEGAL",
      "SelecoesEuropeias",
      "https://1.bp.blogspot.com/-MnwjKTiXaxQ/WHjNG4tbBUI/AAAAAAABH6g/QXeCsdWN0N4rbHzlZtb_xXCvj1XPZ373ACLcB/s1600/B%2B-%2BSENEGAL.png",
      "https://photos.app.goo.gl/CsDmGG2eXKCBLDfc6"
    );

  addNewTeam(
    "NIGÉRIA",
    "SelecoesEuropeias",
    "https://3.bp.blogspot.com/-WO-djT1NsFs/WyvOjujL9NI/AAAAAAABbWQ/ctEXLNATnQwfw3yG_S6YUMRXM7jGOmRBwCLcBGAs/s1600/nigeria%2B-%2Bfedera%25C3%25A7%25C3%25A3o.png",
    "https://photos.app.goo.gl/frumNN49qTUk1TMb6"
  );

  addNewTeam(
    "EGITO",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-M10BzBRmaeM/YMebrazBnQI/AAAAAAAB_q0/kNGq5QamlmY7GuHO_JIWJZt8ZUaiLInwwCLcBGAsYHQ/s500/egypt-hd-logo.png",
    "https://photos.app.goo.gl/hSgTngZ8tCq586Cu9"
  );

  addNewTeam(
    "COREIA",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-oUtYIoIe1dI/XiBhGsmMubI/AAAAAAABvnU/AMPNmIsj92IqOvn_W8-Pi2iqCPgE2EZKwCLcBGAsYHQ/s1600/south-korea-hd-logo.png",
    "https://photos.app.goo.gl/tSJBgvLMtTDqXnUc9"
  );

  addNewTeam(
    "JAPÃO",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/53/89/c6/5389c6fdafa673259b2ca3da43b91506.png",
    "https://photos.app.goo.gl/N88q7wfiY2iFw47i7"
  );

  addNewTeam(
    "GHANA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/f4/06/8b/f4068bebb15ac60a6fe0681c43f66542.png",
    "https://photos.app.goo.gl/ZNCVd4FFSqWiPgZT8"
  );

  addNewTeam(
    "COSTA DO MARFIM",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/57/f2/92/57f2922e374b03626d034423339601bc.png",
    "https://photos.app.goo.gl/sVNwTnPAHAaSREqz5"
  );

  addNewTeam(
    "MARROCOS",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-KWyem3ezVaQ/WrUxXTMsznI/AAAAAAABX74/uOBadm_2n00HrKlzwusOy4hXcsFCHemiACLcBGAs/s1600/MARROCOS%2B-%2BFEDERA%25C3%2587%25C3%2583O.png",
    "https://photos.app.goo.gl/RKssQcTZmRGgjAMP8"
  );

  addNewTeam(
    "CAMARÕES",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/ea/4f/d9/ea4fd91bd32165e43d9eabebd0879690.png",
    "https://photos.app.goo.gl/esbnBqEGZbetBjFR9"
  );

  addNewTeam(
    "ARGÉLIA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/8a/ec/83/8aec838a5e60ff2574d9501a2807edb7.png",
    "https://photos.app.goo.gl/oGkuseRMQxQt5Muo8"
  );

}

if (catalogPicked.catalogPicked == 2) {
    addNewTeam(
      "SENEGAL",
      "SelecoesEuropeias",
      "https://1.bp.blogspot.com/-MnwjKTiXaxQ/WHjNG4tbBUI/AAAAAAABH6g/QXeCsdWN0N4rbHzlZtb_xXCvj1XPZ373ACLcB/s1600/B%2B-%2BSENEGAL.png",
      "https://drive.google.com/drive/folders/1X2KMFVHoiWBR_4qkXV5i4V_ZhSCa-fz3?usp=sharing"
    );

  addNewTeam(
    "NIGÉRIA",
    "SelecoesEuropeias",
    "https://3.bp.blogspot.com/-WO-djT1NsFs/WyvOjujL9NI/AAAAAAABbWQ/ctEXLNATnQwfw3yG_S6YUMRXM7jGOmRBwCLcBGAs/s1600/nigeria%2B-%2Bfedera%25C3%25A7%25C3%25A3o.png",
    "https://drive.google.com/drive/folders/1-UCiC2x-P-9Tam1sBdC9pFOpDprYi9IQ?usp=sharing"
  );

  addNewTeam(
    "EGITO",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-M10BzBRmaeM/YMebrazBnQI/AAAAAAAB_q0/kNGq5QamlmY7GuHO_JIWJZt8ZUaiLInwwCLcBGAsYHQ/s500/egypt-hd-logo.png",
    "https://drive.google.com/drive/folders/15bW52D45zkTL3BDUPG89fbtz07ps2bjN?usp=sharing"
  );

  addNewTeam(
    "COREIA",
    "SelecoesEuropeias",
    "https://1.bp.blogspot.com/-oUtYIoIe1dI/XiBhGsmMubI/AAAAAAABvnU/AMPNmIsj92IqOvn_W8-Pi2iqCPgE2EZKwCLcBGAsYHQ/s1600/south-korea-hd-logo.png",
    "https://drive.google.com/drive/folders/1Hy88gSI1_ehipEyRZNXXXEFAgnfs9qRZ?usp=sharing"
  );

  addNewTeam(
    "JAPÃO",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/53/89/c6/5389c6fdafa673259b2ca3da43b91506.png",
    "https://drive.google.com/drive/folders/1yQO8DPjRbWDXabpSQsIGJ1Rsypyi8-ip?usp=sharing"
  );

  addNewTeam(
    "GHANA",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/f4/06/8b/f4068bebb15ac60a6fe0681c43f66542.png",
    "https://drive.google.com/drive/folders/1VvvhTbPoi77RrvqGkouuPvfaV1EJt5na?usp=sharing"
  );
  
  addNewTeam(
    "CAMARÕES",
    "SelecoesEuropeias",
    "https://i.pinimg.com/originals/ea/4f/d9/ea4fd91bd32165e43d9eabebd0879690.png",
    "https://drive.google.com/drive/folders/1o-ddADUsErS-TZ0159TJqzS62IKa6VOQ?usp=sharing"
  );
 
}
</script>  
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
