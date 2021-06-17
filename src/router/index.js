import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import dashboard from './routes/dashboard'
const routes = [
  ...dashboard,
  { path: '/', redirect: { name: 'dashboard-home' } }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
