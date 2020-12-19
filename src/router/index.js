import Vue from 'vue'
import VueRouter from 'vue-router'
import SmallArms from '../views/SmallArms.vue'
import SupplementaryInfo from '../views/SupplementaryInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: {
      name: 'ModernSmallArms',
    },
  },
  {
    path: '/modern-small-arms',
    name: 'ModernSmallArms',
    component: SmallArms,
    meta: {
      title: 'Modern Small Arms'
    }
  },
  {
    path: '/modern-side-arms',
    name: 'ModernSideArms',
    component: SmallArms,
    meta: {
      title: 'Modern Side Arms'
    }
  },
  {
    path: '/pre-1946-small-arms',
    name: 'Pre1946SmallArms',
    component: SmallArms,
    meta: {
      title: 'Pre-1946 Small Arms'
    }
  },
  {
    path: '/supplementary',
    name: 'Supplementary',
    component: SupplementaryInfo,
    meta: {
      title: 'Supplementary Info'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
