// src/store/index.js
import { createStore } from 'vuex';
import user from './modules/user';
import team from './modules/team';
import catalog from './modules/catalog';
import league from './modules/league';
import pickedProduct from './modules/pickedProduct';
import cartProducts from './modules/cartProducts';
import posts from './modules/posts';

const store = createStore({
  modules: {
    user,
    team,
    catalog,
    league,
    pickedProduct,
    cartProducts,
    posts
  }
});

export default store;
