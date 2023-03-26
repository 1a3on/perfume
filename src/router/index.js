import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/cart',
    component: () => import('../views/front/CartView.vue'),
    
  },

  {
    path: '/',
    component: () => import('../views/EntryView.vue'),
    
  }
 

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
