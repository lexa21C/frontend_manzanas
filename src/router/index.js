import Vue from 'vue'
import VueRouter from 'vue-router'
import ListadoManzanas from '@/views/ListadoManzanas.vue'
import ListadoServicios from '@/views/ListadoServicios.vue'
import Registrar from '@/views/Registrar.vue'
import ListadoEstablecimientos from '@/views/ListadoEstablecimientos.vue'
import CrearManzanas from '@/views/CrearManzanas.vue'
import EditarManzanas from '@/views/EditarManzanas.vue'
import CrearServicios from '@/views/CrearServicios.vue'
import EditarServicios from '@/views/EditarServicios.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/listado-manzanas',
    name: 'listado-manzanas',
    component: ListadoManzanas
  },
  {
    path: '/listado-servicios',
    name: 'listado-servicios',
    component: ListadoServicios
  },
  {
    path: '/listado-establecimientos',
    name: 'listado-establecimientos',
    component: ListadoServicios
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: Registrar
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
