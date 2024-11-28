<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const calculateCoupon = (coupon) => {
  return coupon ? (state.subTotalPrice * coupon / 100) : 0;
};

const calculateSubTotalPrice = (products) => {
  return products.reduce((total, product) => total + (product.originalPrice * product.quantity), 0);
};

const calculateCartPrice = (products, coupon) => {
  const subTotal = calculateSubTotalPrice(products);
  const discount = calculateCoupon(coupon);
  return subTotal - discount;
};

const addProductQuantity = (product) => {
  store.dispatch('addProductQuantity', product.id);
};

const removeProductQuantity = (product) => {
  store.dispatch('removeProductQuantity', product.id);
};

const cartProducts = computed(() => {
  return store.getters.getCartProducts;
});

const coupon = computed(() => {
  return store.state.coupon;
});

const subTotalPrice = computed(() => {
  return calculateSubTotalPrice(cartProducts.value);
});

const totalCartPrice = computed(() => {
  return calculateCartPrice(cartProducts.value, coupon.value);
});

const removeFromCart = (product) => {
  store.dispatch('removeCartProduct', product.id);
};

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
        <div
          class="col-12 row align-items-center my-3"
          v-for="product in cartProducts"
          :key="product.id"
        >
          <div class="photo col-4">
            <img :src="product.photos[0]" alt="Imagem do produto" class="img-fluid" />
          </div>
          <div class="col-8">
            <p>
              <strong>{{ product.brand }} - {{ product.name }}</strong>
            </p>
            <p><span class="text-secondary">Vendido por</span> importsjpe</p>
            <p><span class="text-secondary">Entregue por</span> Correios - Sedex</p>
            <p><span class="text-secondary">Modelo</span> {{ product.name }}</p>
            <div class="row">
              <div class="col-6">
                <p>
                  <span class="text-secondary">Quantidade:</span>
                  <span class="mx-3">
                    <font-awesome-icon icon="minus" @click="removeProductQuantity(product)" />
                  </span>
                  <span>{{ product.quantity }}</span>
                  <span class="mx-3">
                    <font-awesome-icon icon="plus" @click="addProductQuantity(product)" />
                  </span>
                </p>
              </div>
              <div class="col-6 text-end">
                <span class="text-secondary mx-2">{{ product.originalPrice }}</span>
                <span class="discount">
                  - {{ product.discountPercentage }} OFF
                </span>
                <p class="product-originalPrice my-2">
                  <strong>{{ product.originalPrice }}</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-1 align-self-start">
            <font-awesome-icon icon="trash" @click="removeFromCart(product)" />
          </div>
        </div>
      </div>

      <div v-if="cartProducts.length" class="col-4 row border rounded p-3 align-self-start">
        <div class="col-6">
          <p class="float-left">Subtotal ({{ totalProductsItems }} item)</p>
          <p class="float-left">Cupom</p>
          <p class="float-left">Valor total</p>
        </div>

        <div class="col-6 text-end">
          <p class="float-right"><strong>{{ subTotalPrice }} R$</strong></p>
          <p v-if="coupon" class="float-right">Adicionar</p>
          <p v-else class="float-right">{{ coupon }}%</p>
          <p class="float-right total-value"><strong>{{ totalCartPrice }} R$</strong></p>
        </div>
        <div class="col-12">
          <button class="btn btn-danger w-100">Finalizar Compra</button>
          <button class="btn btn-outline-secondary w-100 my-3" @click="handleShowCart">Escolher mais produtos</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.product-originalPrice {
  font-size: 1.4em;
}

.total-value {
  font-size: 1.4em;
}

.discount {
  background-color: #10ba78;
  color: white;
  padding: 3px;
}

.photo {
  width: 125px;
}
</style>
