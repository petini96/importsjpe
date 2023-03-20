import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdmView from '../views/AdmView.vue'
import TeansView from '../views/TeansView.vue'
import PostView from '../views/PostView.vue'
import ProductsView from '../views/ProductsView.vue'
import SupplierView from '../views/SupplierView.vue'
import ClientView from '../views/ClientView.vue'
import YuppoView from '../views/YuppoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/adm',
      name: 'adm',
      component: AdmView
    },
    {
      path: '/adm/products',
      name: 'prod',
      component: ProductsView
    },
    {
      path: '/adm/products/yuppo',
      name: 'yuppo',
      component: YuppoView
    },
    {
      path: '/adm/suppliers',
      name: 'suppliers',
      component: SupplierView
    },
    {
      path: '/adm/clients',
      name: 'clients',
      component: ClientView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CatalogView.vue')
    },
    {
      path: '/teans/:title:namecp',
      name: 'teans',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TeansView,
      props: true
    },
    {
      path: '/posts',
      name: 'posts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PostView,
      props: true
    },
  ]
})

export default router
