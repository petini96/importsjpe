<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const cartProducts = computed(() => {
  console.log(store.getters.getCartProducts);
  return store.getters.getCartProducts;
});

const handleShowCart = () => {

  router.push({ name: 'product' });
};

</script>

<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-8">
        <h4 class="my-3">🛒 Meu carrinho</h4>
      </div>
      <div class="col-4">
        <h4>Resumo da compra</h4>
      </div>
      <div class="col-8 row">
        <div class="col-12 row align-items-center my-3" v-for="product in cartProducts">
          <div class="photo col-4">
            <img :src="product.photos[0]" alt="Imagem do produto" class="img-fluid" />
          </div>
          <div class="col-8">
            <p>
              <strong>{{product.productBrand}} - {{ product.productName }}</strong>
            </p>

            <p><span class="text-secondary">Vendido por </span> importsjpe  </p>
            <p><span class="text-secondary"> Entregue por </span> Correios - Sedex </p>
            <p><span class="text-secondary"> Modelo </span> {{ product.productName }} </p>
            <div class="row">
              <div class="col-6">
                <p>
                  <span class="text-secondary"> Quantidade: </span> 
                  <span class="mx-3">
                    <font-awesome-icon icon="minus" />
                  </span>
                  <span>
                    1
                  </span>
                  <span class="mx-3">
                    <font-awesome-icon icon="plus" />
                  </span>
                 </p>
              </div>
              <div class="col-6 text-end">
                <span class="text-secondary mx-2"> {{ product.originalPrice }} </span>
                <span class="discount">
                  - {{ product.discountPercentage }} OFF
                </span>
                <p class="product-price my-2">
                  <strong > 
                    {{ product.originalPrice }}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-1 align-self-start">
            <font-awesome-icon icon="trash" />
          </div>
          
        </div> 
      </div>

      <div class="col-4 row border rounded p-3 align-self-start">
        <div class="col-6">
          <p class="float-left">Subtotal (1 item) </p> 
          <p class="float-left">Cupom </p> 
          <p class="float-left">Valor total</p> 
        </div>

        <div class="col-6 text-end">
          <p class="float-right"><strong>R$57,89</strong></p>
          <p class="float-right">Adicionar</p>
          <p class="float-right total-value"><strong>R$355,89</strong></p>
        </div>
        <div class="col-12">
          <button class="btn btn-danger w-100"> Finalizar Compra</button>
          <button class="btn btn-outline-secondary w-100 my-3">Escolher mais produtos</button>
        </div>
      </div>

    </div>

    
  </div>
</template>

<style>

.product-price{
  font-size: 1.4em;
}
.total-value{
  font-size: 1.4em;
}
.discount{
  background-color: #10ba78;
  color: white;
  padding: 3px;
}
.photo {
  width: 125px;
}

</style>
