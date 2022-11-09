import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ServicesRoutes from '../router/servicios.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import('../views/Servicios.vue'),
    children: ServicesRoutes
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/Productos.vue')
  },
  {
    path: '/productos/:categoria',
    name: 'ProductoCategoria',
    component: () => import('../views/ProductoCategoria.vue')
  },
  {
    path: '/productos/veterinaria/:categoria',
    name: 'ProductoVeterinaria',
    component: () => import('../views/ProductoVeterinaria.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import('../views/Clientes.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/quienes-somos',
    name: 'QuienesSomos',
    component: () => import('../views/QuienesSomos.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
