import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import ProductView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produto',
      name: 'product',
      component: ProductView,
      props: route => {
        const product = route.query.product ? JSON.parse(route.query.product) : null;
        return { product };
      }
    }
  ]
})

export default router
