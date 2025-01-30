<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Product } from '../types/Product'; // Importação apenas de tipos
import { useProductStore } from '../store/product-store';

const productStore = useProductStore();

const product = computed<Product | null>(() => productStore.product);

onMounted(async () => {
  try {
    console.log("fetch data"); 
    if(productStore.selectedProduct){
      await productStore.getProduct(productStore.selectedProduct);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const currentIndex = ref<number>(0);

const isProductInCart = (id: number): boolean => {
  console.log(id);
  // return store.getters.isProductInCart(id);
  return true;
};

const pickPhoto = (index: number): void => {
  currentIndex.value = index;
};

const isAddedToCart = ref<boolean>(false);

const addToCart = (product: Product): void => {

  const cartProduct = {
    id: product.id,
    name: product.name,
    category: product.productCategory.name,
    brand: product.brand,
    quantity: 1,
    originalPrice: product.originalPrice,
    discountPercentage: product.discountPercentage,
    discountedPrice: product.discountPrice,
    installmentPrice: product.installmentPrice,
    installmentsCount: product.installmentsCount,
    additionalInfo: product.additionalInfo,
    description: product.description,
    photos: product.photos,
  };

  console.log(cartProduct);
  // store.dispatch('updateCartProducts', cartProduct);
  isAddedToCart.value = true;
};

const removeFromCart = (product: Product): void => {
  console.log(product);
  // store.dispatch('removeCartProduct', product.id);
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
              <img 
                :src="product?.photos?.[currentIndex]?.url || 'caminho/para/imagem-placeholder.jpg'" 
                alt="Imagem do produto" 
                class="img-fluid" 
              />
            </div>
          </div>

          <div class="col-12 row my-3">
            <div v-for="(photo, index) in product.photos" :key="photo.id" class="col-3 mini-viewer" v-on:click="pickPhoto(index)">
              <img :src="photo.url" alt="Imagem do produto" class="img-fluid rounded " />
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="info my-5">
            <p>{{ product.productCategory.name }}</p>
            <h3>{{ product.brand }}</h3>
            <p>{{ product.name }}</p>
          </div>
          <div class="originalPrice">
            <p class="old-originalPrice">R$ {{ product.originalPrice }} -{{ product.discountPercentage }}</p>
            <p class="new-originalPrice">R$ {{ product.discountPrice }}</p>
            <p>{{ product.installmentsCount }} x R$ {{ product.installmentPrice }}</p>
            <p>{{ product.additionalInfo }}</p>
          </div>
          <div class="actions my-5">
            <!-- <p v-if="isSingleSizeAvailable">Tamanho único disponível</p> -->
            <!-- <button class="btn-outline px-5" @click="addToCart(product)">
              Comprar
            </button> -->
            <button v-if="!isProductInCart(product.id)" class="btn-outline px-5" @click="addToCart(product)">
              Comprar
            </button>
            <button v-else class="btn-outline px-5 my-2" @click="removeFromCart(product)">
              Remover da sacola
            </button>
            <RouterLink class="navbar-brand" to="carrinho">
              <button class="btn btn-warning mx-3 my-2">Carrinho</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
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

.old-originalPrice {
  text-decoration: line-through;
  color: gray;
}

.new-originalPrice {
  color: red;
  font-weight: bold;
}

.originalPrice p {
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
