import Vue from 'vue'
import VueRouter from 'vue-router'
const shouye = () => import('@/views/shouye/shouye.vue') 
const caidan = () =>import('@/views/caidan/caidan.vue')
const gouwuche = () =>import('@/views/gouwuche/gouwuche.vue')
const wode = () => import('@/views/wode/wode.vue')
const xiangqing = () => import('@/views/xiangqing/xiangqing.vue')

Vue.use(VueRouter)

const routes = [
  {
    path : '',
    redirect : '/shouye'
  },
  {
    path :'/shouye',
    component : shouye
  },
  {
    path : '/caidan',
    component : caidan
  },
  {
    path : '/gouwuche',
    component : gouwuche
  },
  {
    path :'/wode',
    component : wode
  },
  {
    path : '/xiangqing/:id',
    component : xiangqing
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
