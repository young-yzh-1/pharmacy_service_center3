import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect:'/pharmacyHome'},
  { 
    path: '/pharmacyHome',
    name:'pharmacyHome',
    component: () =>
      import('../components/Home/pharmacyHome.vue') 
  },
  { path:'/pharmacyGuideHome', 
    name:'pharmacyGuideHome',
    component: () =>
      import('../components/pharmacyGuide/pharmacyGuideHome.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
