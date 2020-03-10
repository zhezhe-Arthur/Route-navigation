import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
const home = () => import('../pages/home/home.vue')
const category = () => import('../pages/category/category.vue')
const cart = () => import('../pages/cart/cart.vue')
const profile = () => import('../pages/profile/profile.vue')


Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },  
  {
    path: '/profile',
    component: profile
  },]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
