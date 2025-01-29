import type { RouteRecordRaw } from 'vue-router';
import ProductView from '../views/ProductView.vue'
import ProductCreateView from '../views/ProductCreateView.vue'
import CartView from '../views/CartView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/produto',
    name: 'product',
    component: ProductView
  },
  {
    path: '/produto/cadastro',
    name: 'product-create',
    component: ProductCreateView
  },
  {
    path: '/carrinho',
    name: 'cart',
    component: CartView
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
