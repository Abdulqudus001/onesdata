import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meals',
    name: 'Meals',
    component: () => import('@/views/Meals.vue')
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: () => import('@/views/Restaurants.vue')
  },
  {
    path: '/formula',
    name: 'Formula',
    component: () => import('@/views/Formula.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
