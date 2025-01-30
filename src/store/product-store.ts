import { defineStore } from 'pinia';
import { fetchProducts, getProduct } from '../services/productService';
import type { ListProduct, Product } from '../types/Product';

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedProduct: null as number | null,
    product: null as Product | null,
    products: [] as ListProduct[],
  }),
  actions: {
    async fetchProducts(page: number = 0, size: number = 10) {
      try {
        const products = await fetchProducts(page, size);
        this.setProducts(products.content);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    },
    async getProduct(productId: number) {
      try {
        const product = await getProduct(productId);
        this.setProduct(product);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    },
    setSelectedProduct(productId: number) {
      this.selectedProduct = productId;
    },
    setProduct(product: Product) {
      this.product = product;
    },
    setProducts(products: ListProduct[]) {
      this.products = products;
    },
  },
});
