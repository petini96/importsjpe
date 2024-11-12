<script setup>

import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
</script>  
<script>
export default {
  // props: {
  //   // Using value here allows us to be v-model compatible.
  //   value: File
  // },
  data() {
    return {
      products: null
    }
  },
  methods: {
    handleFileChange(e) {

    },

  },
  mounted() {
    axios
      .get(import.meta.env.VITE_APP_HOST + '/products')
      .then(response => (this.products = response.data.products))
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
            <h2 class="text-center">Produtos</h2>
            <p>Você e meu pau pra sempre!</p>

          </div>
    </div>
    <div v-for="(productApi, index) in this.products">
 
      <div class="row align-items-center my-3">
        <div v-if="index == 0" class="col-12">
          
          <div class="col-12">

            <h4>Os mais falsificados do mercado...</h4>
            <hr>
             <p>Garantimos o produto mais pirata que existe para que você tenha a sensação completa de como ser pobre. Um pobre raiz nato, sem frescura e mimimi.</p>
          </div>
          <hr>
        </div>
        <div class="col-6">
          <div class="mycard-header">
            <img class="rounded img-fluid" :src="productApi.photo" alt="">
            
          </div>
        </div>
        <div class="col-6">
          <div class="mycard-body">
            <h3>{{ productApi.uniforme }}</h3>
            <p>{{ productApi.model_name }}</p>
            <p>GÊNERO: <span>{{ productApi.gender }}</span></p>
            <p>SÉRIE: <span>{{ productApi.type.name }}</span></p>
            <p>GÊNERO: <span>{{ productApi.category.name }}</span></p>
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
