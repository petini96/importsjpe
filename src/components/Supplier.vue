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


</script>  
<script>
export default {
  // props: {
  //   // Using value here allows us to be v-model compatible.
  //   value: File
  // },
  data() {
    return {
      suppliers: null,
      detail: false,
      clickedID: ""
    }
  },
  methods: {
    whatsApp(contactNumber, question) {
      return 'https://wa.me/' + contactNumber + '?text=' + question;
    },
    supplierClicked(clickedID){
     this.clickedID = clickedID
    },
    divIndex(index){
      return "supplier-"+index
    }
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_APP_HOST+'/suppliers')
      .then(response => (this.suppliers = response.data.suppliers))
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
        <h2 class="text-center">Fornecedores</h2>
        <p>Ah mano, vou nem falar com você.</p>

      </div>
    </div>
    <div v-for="(supplierApi, index) in this.suppliers">

      <div class="row align-items-center my-3" v-on:click="supplierClicked(divIndex(index))">
        <div v-if="index == 0" class="col-12">

          <div class="col-12">

            <h4>Os mais falsificados do mercado...</h4>
            <hr>
            <p>Garantimos o produto mais pirata que existe para que você tenha a sensação completa de como ser pobre. Um
              pobre raiz nato, sem frescura e mimimi.</p>
          </div>
          <hr>
        </div>
        <div class="col-6">
          <div class="mycard-header">
            <img :src="supplierApi.photo" alt="" class="img-fluid">
          </div>

        </div>
        <div class="col-6">
          <div class="mycard-body">

            <h3>{{ supplierApi.company }}</h3>
            <h3>{{ supplierApi.contact_name }}</h3>
            <a :href="whatsApp(supplierApi.contact_number, questions['doubt']['new-orders']['question'])">
              <span style="font-size:2em;margin-right: 10px;">
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
              </span>
              <h3 class="d-inline ">Fala bb</h3>
            </a>
            <!-- <h3>{{ supplierApi.contact_number }}</h3>  -->
          </div>

        </div>
        <!-- v-show="detail" -->
        <div class="col-12" v-if="clickedID == divIndex(index)"  :id="divIndex(index)">
          <div class="p-3 ">
            <div class="p-3 mb-3 rounded bg-black text-center" id="figure">
              <a :href="whatsApp(supplierApi.contact_number, questions['doubt']['new-orders']['question'])">
                <p>{{ questions['doubt']['new-orders']['purpose'] }}</p>
              </a>
            </div>

            <div class="p-3 mb-3 rounded bg-black text-center">
              <a :href="whatsApp(supplierApi.contact_number, questions['doubt']['new-orders']['question'])">
                <p>{{ questions['doubt']['shipping-time']['purpose'] }}</p>
              </a>
            </div>
            <div class="p-3 mb-3 rounded bg-black text-center">
              <a :href="whatsApp(supplierApi.contact_number, questions['doubt']['via-payment']['question'])">
                <p>{{ questions['doubt']['via-payment']['purpose'] }}</p>
              </a>
            </div>
            <div class="p-3 mb-3 rounded bg-black text-center">
              <a :href="whatsApp(supplierApi.contact_number, questions['doubt']['dollar-exchange']['question'])">
                <p>{{ questions['doubt']['dollar-exchange']['purpose'] }}</p>
              </a>
            </div>
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
</style>
