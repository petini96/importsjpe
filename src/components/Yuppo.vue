 

<template>
  <div class="container"> 
    <div class="row align-items-center justify-content-center">
      <div class="col-3 text-center">
        <img src="../assets/OFICIAL.png" alt="" class="img-fluid">
      </div>
      <div class="col-2 text-center">
        <h2 class="text-center">Produtos Yuppo</h2>
        <p>Você e meu pau pra sempre!</p>
       
      </div>
    </div>
    <div class="row justify-content-center align-items-center p-3">
      <div class="col-11 col-md-3 col-lg-3 my-3 " v-for="(productApi, index) in this.products">
        <div class="card-header">
           
          <h5>#bolerada67 </h5>
        </div>
        <div class="card-body bolerada-bg-black border bolerada-border-yellow rounded hover-in-out">
          <img class="rounded img-fluid p-3" :src="productApi.url" alt="" >
          
        </div>
      </div>
      <button v-on:click="handleNextPhotoDrive">maisena</button>
    </div>
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
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
    setNextPageToken(){
      this.nextPageToken = response.headers['nextpagetoken']
    },
    handleNextPhotoDrive() { 
      axios
      .get(import.meta.env.VITE_APP_HOST + '/products/folder/1WURcRzgC8mktrb4elvrmA-jtrjkxKCBj?pageSize=10&pageToken='+this.nextPageToken)
      //.then(response => (this.products = response.data.products))
      .then(response => {
        console.log(">>>>>" + response.headers['nextpagetoken']);
        // Obter o cabeçalho 'X-Request-Id' da resposta
        this.products = response.data.products;
        this.nextPageToken = response.headers['nextpagetoken']; 
      })
      this.nextPageToken;
    },
  },

  mounted() {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.imagemUrl;
    axios.defaults.headers.common['X-Requested-With'] = 'Nextpagetoken';

    axios
      .get(import.meta.env.VITE_APP_HOST + '/products/folder/1WURcRzgC8mktrb4elvrmA-jtrjkxKCBj?pageSize=10')
      //.then(response => (this.products = response.data.products))
      .then(response => {
        console.log(">>>>>" + response.headers['nextpagetoken']);
        // Obter o cabeçalho 'X-Request-Id' da resposta
        this.products = response.data.products;
        this.nextPageToken = response.headers['nextpagetoken']; 
      })
  }
}

</script>
<style scoped>
.mycard-body h3 {
  color: #FFC100;
}
</style>
