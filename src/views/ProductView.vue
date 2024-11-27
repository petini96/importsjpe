<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import CartComponent from '../components/CartComponent.vue';

const store = useStore();

const product = computed(() => {
  console.log(store.getters.getPickedProduct);
  return store.getters.getPickedProduct;
});

const currentIndex = ref(0);

const isProductInCart = (productId) => {
    return store.getters.isProductInCart(productId);
};

const pickPhoto = (index: number) => {
  currentIndex.value = index;
};

const isAddedToCart = ref(false);

const addToCart = (product) => {
  const cartProduct = {
    productId: product.productId,
    productName: product.productName,
    productCategory: product.productCategory,
    productBrand: product.productBrand,
    originalPrice: product.originalPrice,
    discountPercentage: product.discountPercentage,
    discountedPrice: product.discountedPrice,
    installmentPrice: product.installmentPrice,
    installmentsCount: product.installmentsCount,
    additionalInfo: product.additionalInfo,
    description: product.description,
    photos: product.photos,
  };

  store.dispatch('updateCartProducts', cartProduct);
  isAddedToCart.value = true;
};

const removeFromCart = (product) => {
  store.dispatch('removeCartProduct', product.productId);
  isAddedToCart.value = false;
};

</script>

<template>
  <section v-if="product">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-8">
          <div class="col-12 product-viewer">
            <div class="photo">
              <img :src="product.photos[currentIndex]" alt="Imagem do produto" class="img-fluid" />
            </div>
          </div>

          <div class="col-12 row my-3">
            <div v-for="(photo, index) in product.photos" class="col-3 mini-viewer" v-on:click="pickPhoto(index)">
              <img :src="photo" alt="Imagem do produto" class="img-fluid rounded " />
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="info my-5">
            <p>{{ product.productCategory }}</p>
            <h3>{{ product.productBrand }}</h3>
            <p>{{ product.productName }}</p>
          </div>
          <div class="price">
            <p class="old-price">R$ {{ product.originalPrice }} -{{ product.discountPercentage }}</p>
            <p class="new-price">R$ {{ product.discountedPrice }}</p>
            <p>{{ product.installmentsCount }} x R$ {{ product.installmentPrice }}</p>
            <p>{{ product.additionalInfo }}</p>
          </div>
          <div class="actions my-5">
            <p v-if="isSingleSizeAvailable">Tamanho único disponível</p>
            <!-- <button class="btn-outline px-5" @click="addToCart(product)">
              Comprar
            </button> -->
            <button v-if="!isProductInCart(product.productId)" class="btn-outline px-5" @click="addToCart(product)">
              Comprar
            </button>
            <button v-else class="btn-outline px-5" @click="removeFromCart(product)">
              Remover da sacola
            </button>

            <button class="btn btn-warning mx-3">Carrinho</button>
          </div>
        </div>

      </div>
    </div>
    <CartComponent />
  </section>
  <section v-else>
    <p>Produto não encontrado.</p>
  </section>
</template>

<style scoped>
.mini-viewer {
  min-width: 130px;
  max-width: 130px;
}

.product-viewer .photo {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
}

.product-viewer .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.old-price {
  text-decoration: line-through;
  color: gray;
}

.new-price {
  color: red;
  font-weight: bold;
}

.price p {
  margin: 4px 0;
  padding: 0;
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: white;
  color: black;
  border-color: white;
}

.mini-viewer {
  min-width: 130px;
  max-width: 130px;
  max-height: 130px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.mini-viewer:hover {
  transform: scale(0.9);
  border: 3px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
}

.mini-viewer.active {
  border: 3px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);
  transform: scale(0.9);
}
</style>
