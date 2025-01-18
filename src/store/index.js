// src/store/index.js
import { createStore } from 'vuex';
import user from './modules/user';
import team from './modules/team';
import catalog from './modules/catalog';
import league from './modules/league';
import pickedProduct from './modules/pickedProduct';
import cartProducts from './modules/cartProducts';
import posts from './modules/posts';
import products from './modules/products';

const store = createStore({
  modules: {
    user,
    team,
    catalog,
    league,
    pickedProduct,
    cartProducts,
    posts,
    products
  }
});

export default store;
