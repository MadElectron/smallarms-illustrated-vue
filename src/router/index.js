import Vue from 'vue'
import VueRouter from 'vue-router'
import SmallArms from '../views/SmallArms.vue'

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
    label: 'Modern Small Arms'
  },
  {
    path: '/modern-small-arms-part-2',
    name: 'ModernSmallArmsPart2',
    component: SmallArms,
    label: 'Modern Small Arms (Part 2)'
  },
  {
    path: '/modern-side-arms',
    name: 'ModernSideArms',
    component: SmallArms,
    label: 'Modern Side Arms'
  },
  {
    path: '/pre-1946-small-arms',
    name: 'Pre1946SmallArms',
    component: SmallArms,
    label: 'Pre-1946 Small Arms'
  },
  {
    path: '/supplementary',
    name: 'Supplementary',
    // component: SmallArms,
    label: 'Supplementary'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
