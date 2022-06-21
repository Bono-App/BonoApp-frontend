import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/registerbono',
    name: 'registerbono',
    component: () => import('../views/RegisterBonoView.vue')
  },
  {
    path: '/bondlist',
    name: 'bondlist',
    component: () => import('../views/BondListView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignInView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
