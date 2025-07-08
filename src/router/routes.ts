import type { RouteRecordRaw } from 'vue-router';
import ProductPage from '../pages/products/ProductPage.vue'
import CartPage from '../pages/CartPage.vue'
import CreateBannerPage from 'src/pages/banner/CreateBannerPage.vue';
import LoginPage from 'src/pages/auth/LoginPage.vue';
import CompleteProfilePage from 'src/pages/profile/CompleteProfilePage.vue';
  
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('layouts/auth/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: LoginPage
      }
    ],
  },
  {
    path: '/complete-profile',
    component: () => import('layouts/auth/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'complete-profile',
        component: CompleteProfilePage
      }
    ],
  },
  {
    path: '/',
    component: () => import('layouts/home/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/HomePage.vue')
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
        meta: { requiresAuth: true }
      }
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/admin/SidebarLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/DashboardPage.vue'),
        name: 'dashboard',
        meta: { requiresAuth: true }
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
