import type { RouteRecordRaw } from 'vue-router';
import ProductPage from '../pages/products/ProductPage.vue'
import CartPage from '../pages/CartPage.vue'
import HomePage from 'pages/HomePage.vue';
import CreateBannerPage from 'src/pages/banner/CreateBannerPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/home/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage
      }
    ],
  },
  {
    path: '/produto',
    component: () => import('layouts/admin/SidebarLayout.vue'),
    children: [
      {
        path: '',
        name: 'product',
        component: ProductPage
      },
      {
        path: 'cadastro',
        component: () => import('pages/products/CreateProduct.vue'),
        name: 'product-create',
      }
    ],
  },
  {
    path: '/banner',
    component: () => import('layouts/admin/SidebarLayout.vue'),
    children: [
      {
        path: 'cadastro',
        name: 'banner',
        component: CreateBannerPage
      }
    ],
  },
  {
    path: '/carrinho',
    name: 'cart',
    component: CartPage
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
