<script setup>

import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
let questions =
{
  "doubt": {
    "new-orders": {
      "question": "Hi Friend! Are you sending new orders ?",
      "purpose": "Está recebendo novos pedidos ?"
    },
    "shipping-time": {
      "question": "How long for shipping ?",
      "purpose": "Quanto tempo para envio ?"
    },
    "via-payment": {
      "question": "Is the payment method via aliexpress ?",
      "purpose": "O pagamento está sendo pelo aliexpress ?"
    },
    "dollar-exchange": {
      "question": "What is the dollar exchange rate today ?",
      "purpose": "What is the dollar exchange rate today ?"
    }
  }
}
window.onscroll = function() {myFunction()};

function myFunction() {
  let animationSection = document.getElementById("animate-section");
  let indexScrollTop = document.documentElement.scrollTop;
  let myVideo = document.getElementById("my-video");
  let bottomValue = animationSection.offsetTop + myVideo.offsetHeight
  // myVideo.onscroll = function(){
  //   document.getElementById("my-video").classList.add("slow-video");
  // };
  
   
  
  if (animationSection.offsetTop >= indexScrollTop) {
    myVideo.playbackRate = 0.4;
    myVideo.classList.add("slow-video");
  }
  if ( bottomValue <= indexScrollTop) {
    myVideo.playbackRate = 1;
    myVideo.classList.remove("slow-video");
  }
  if (indexScrollTop == 0){
    myVideo.playbackRate = 1;
    myVideo.classList.remove("slow-video");
  }
}
// const scrollToTop = function () {
//   window.scrollTo(0, 0);
// };

</script>  
<script>
export default {
  // props: {
  //   // Using value here allows us to be v-model compatible.
  //   value: File
  // },
  data() {
    return {
      clients: null,
      detail: false,
      clickedID: ""
    }
  },
  methods: {
    whatsApp(contactNumber, question) {
      return 'https://wa.me/' + contactNumber + '?text=' + question;
    },
    supplierClicked(clickedID) {
      this.clickedID = clickedID
    },
    divIndex(index) {
      return "supplier-" + index
    },
    photo(photo) {
      if (photo == "" || photo == " ") {
        photo = "https://www.bolerada67.com.br/logo-bg-none.png";
      }
      return photo
    },
    dateFormat(date) {
      var date = new Date(date);
      // let str = date.toISOString().substring(0, 10);

      const yyyy = date.getFullYear();
      let mm = date.getMonth() + 1; // Months start at 0!
      let dd = date.getDate();


      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;


      return dd + '/' + mm + '/' + yyyy;
    } 
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_APP_HOST + '/clients')
      .then(response => (this.clients = response.data.clients))
  }
}

</script>
<template>
  <div class="container">
    <!-- <img src="https://drive.google.com/uc?export=view&id=1Xm9BhPz-2ZHkyBv4bu4nnA45iMGnoWS7"> -->
    <div class="row align-items-center justify-content-center">
      <div class="col-6 text-center">
        <img src="../assets/OFICIAL.png" alt="" class="img-fluid">
      </div>
      <div class="col-6 text-center">
        <h2 class="text-center">Clientes</h2>
        <p>Bando de FDP's. Estão me devendo e comprando drogas...</p>



      </div>
    </div>
    <div v-for="(clientApi, index) in this.clients" id="animate-section">

      <div  class="row align-items-center my-3" v-on:click="supplierClicked(divIndex(index))">
        <div v-if="index == 0" class="col-12">

          <div class="col-12 row align-items-center">

            <h4>Estamos doidinhos pra te passar a perna</h4>
            <hr>
            
            <div class="col-7">
              <p>Na primeira oportunidade vamos pegar a sua irmã. Depois disso vamos pegar a sua tia, irmã denovo e
                depois
                sua mãe/vó.</p>
            </div>
           
          </div>
          <hr>
          <!-- <div class="col-12 row align-items-center">
            <div class="col-12 " >
              <video id="my-video" class=" img-fluid " controls autoplay loop>
                <source src="../assets/sasa-running_VP9.webm" type="video/webm">
              </video>
              <p class="text-danger">Vc é boy rapaz</p>
            </div>
          </div> -->
        </div>
        <div class="col-6">
          <div class="mycard-header">
            <img :src="photo(clientApi.photo)" alt="" class="img-fluid circle img-listing bg-dark">
          </div>

        </div>
        <div class="col-6">
          <div class="mycard-body">
            <h3>{{ clientApi.name }}</h3>
            <a :href="whatsApp(clientApi.contact_number, questions['doubt']['new-orders']['question'])">
              <span style="font-size:2em;margin-right: 10px;">
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
              </span>
              <h3 class="d-inline ">Conversar</h3>
            </a>
            <!-- <h3>{{ clientApi.contact_number }}</h3>  -->
          </div>

        </div>
        <!-- v-show="detail" -->
        <div class="col-12 my-3" v-if="clickedID == divIndex(index)" :id="divIndex(index)">
          <div class="p-2 ">
            <span style="font-size: 1.5em;">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </span>
            <h3 class="d-inline"><span class="text-danger mx-3">3</span> COMPRAS</h3>
          </div>

          <div class="p-2 ">
            <span style="font-size: 1.5em;">
              <font-awesome-icon icon="fa-solid fa-divide" />
            </span>
            <h3 class="d-inline"><span class="text-danger mx-3">{{ clientApi.Debts.length }}</span> PARCELAMENTO </h3>
            <div v-for="(debit, index) in clientApi.Debts"
              class="row justify-content-center align-items-center p-3 my-3" id="figure">
              <div class="col-7">
                <div class="row">
                  <div class="col">
                    <span class="mx-3">
                      <font-awesome-icon icon="fa-solid fa-money-bill" />
                    </span>
                    <p class="d-inline"><strong>R${{ debit.total_value }}.00</strong></p>
                  </div>
                </div>
                <div class="col">
                  <span class="mx-3">
                    <font-awesome-icon icon="fa-solid fa-divide" />
                  </span>
                  <p class="d-inline"><strong>{{ debit.quantity_installment }}x</strong></p>
                </div>
                <div class="col">
                  <span class="mx-3">
                    <font-awesome-icon icon="fa-solid fa-calendar" />
                  </span>
                  <p class="d-inline">{{ dateFormat(debit.date) }}</p>
                </div>
              </div>
              <div class="col-5 text-center">
                <div v-if="debit.is_done">
                  <img src="../assets/jesus-alegre.png" alt="" class="img-fluid  ">
                </div>
                <div v-else>

                  <img src="../assets/sad-jesus.png" alt="" class="img-fluid  ">
                </div>
              </div>
            </div>
          </div>
          <div class="p-2 ">
            <span style="font-size: 1.5em;">
              <font-awesome-icon icon="fa-solid fa-paper-plane" /> </span>
            <h3 class="d-inline"><span class="text-danger mx-3">3</span> ENCOMENDAS</h3>
          </div>
          <div class="p-2">

            <button class="btn btn-primary">NOVA VENDA</button>

            <button class="btn btn-warning mx-3">NOVA PARCELA</button>


          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.mycard-body h3 {
  color: #FFC100;
}

.img-listing {
  min-width: 125px;
  min-height: 125px;

  max-width: 125px;
  max-height: 125px;
}

.my-video {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  border: solid white 1px;
}
.my-video2 {
  position: fixed;
  min-height: 100%;
  min-width: 100%;
  z-index: -100;
}
.slow-video{
  filter: grayscale(100%);
  background-image: url("../assets/geometric.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 12.5em;
}
</style>
