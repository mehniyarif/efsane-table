import Vue from 'vue'
import VueRouter from 'vue-router'
import TurkeySuperLeage from './views/turkey-super-leage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Turkey Super Leage',
    component: TurkeySuperLeage
  },
  {
    path: '/turkey-first-leage',
    name: 'Turkey 1 Leage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/turkey-1-leage')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
