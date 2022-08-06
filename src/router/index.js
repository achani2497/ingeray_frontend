import Vue                from 'vue'
import VueRouter          from 'vue-router'
import Home               from '../views/Home.vue'
import Servicios          from '../views/Servicios.vue'
import Productos          from '../views/Productos.vue'
import ProductoCategoria  from '../views/ProductoCategoria.vue'
import Contacto           from '../views/Contacto.vue'
import QuienesSomos       from '../views/QuienesSomos.vue'
import Clientes           from '../views/Cliente.vue'

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
    component: Servicios
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/productos/:categoria',
    name: 'ProductoCategoria',
    component: ProductoCategoria
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/quienes-somos',
    name: 'QuienesSomos',
    component: QuienesSomos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
