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
      products: null,
      imageID: null,
      nextPageToken: "",
      exportImageBase: "https://drive.google.com/uc?export=view&id=",
      exportImageSufix: "&format=jpg"
    }
  },
  methods: {
    handleNextPhotoDrive(e) {
      axios
      .get(import.meta.env.VITE_APP_HOST + '/products/folder/1WURcRzgC8mktrb4elvrmA-jtrjkxKCBj?pageSize=5&pageToken='+this.nextPageToken)
      //.then(response => (this.products = response.data.products))
      .then(response => {
        console.log(response.headers)
        // Obter o cabeçalho 'X-Request-Id' da resposta
        this.products = response.data.products
        this.nextPageToken = response.headers['nextpagetoken']; 
      })
      this.nextPageToken
    },

  },

  mounted() {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.imagemUrl;
    axios.defaults.headers.common['X-Requested-With'] = 'Nextpagetoken';

    axios
      .get(import.meta.env.VITE_APP_HOST + '/products/folder/1WURcRzgC8mktrb4elvrmA-jtrjkxKCBj?pageSize=5')
      //.then(response => (this.products = response.data.products))
      .then(response => {
        console.log(response.headers)
        // Obter o cabeçalho 'X-Request-Id' da resposta
        this.products = response.data.products
        this.nextPageToken = response.headers['nextpagetoken']; 
      })
  }
}

</script>
<template>
  <div class="container">


    <!-- <img src='https://drive.google.com/file/d/1-70ebBp3e44JgbaLTcVoeeXBNkZbAYzU&format=jpg' alt='imagem' /> -->
    <!-- <img src="https://drive.google.com/uc?export=view&id=1Xm9BhPz-2ZHkyBv4bu4nnA45iMGnoWS7"> -->
    <div class="row align-items-center justify-content-center">
      <div class="col-6 text-center">
        <img src="../assets/OFICIAL.png" alt="" class="img-fluid">
      </div>
      <div class="col-6 text-center">
        <h2 class="text-center">Produtos Yuppo</h2>
        <p>Você e meu pau pra sempre!</p>
       
      </div>
    </div>
    <div class="row justify-content-center align-items-center p-3">
     
      <div class="col-11 col-md-3 col-lg-2 my-2" v-for="(productApi, index) in this.products">


        <!-- <p>{{ productApi.name.substr(productApi.name.indexOf(" ") + 1).split(".")[0] }}</p> -->
        <!-- <p>bolerada67</p> -->
        <img class="rounded img-fluid" :src="this.exportImageBase + productApi.id + exportImageSufix" alt="" >


      </div>
      <a @click="handleNextPhotoDrive"> Next </a>
    </div>

  </div>
</template>

<style scoped>
.mycard-body h3 {
  color: #FFC100;
}
</style>
