import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Servers from '../views/Servers.vue'
import Recensioner from '../views/Recensioner.vue'
import InfoPrivat from '../views/InfoPrivat.vue'
import InfoBusiness from '../views/InfoBusiness.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/servers',
      name: 'servers',
      component: Servers
    },
    {
      path: '/recensioner',
      name: 'recensioner',
      component: Recensioner
    },
    {
      path: '/info-privat',
      name: 'info-privat',
      component: InfoPrivat
    },
    {
      path: '/info-business',
      name: 'info-business',
      component: InfoBusiness
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound
    },
  ]
})

export default router
