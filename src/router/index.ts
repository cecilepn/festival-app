import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/programmation'
    },
    {
      path: '/programmation',
      name: 'programmation',
      component: () => import('@/pages/Programmation.vue')
    },
    {
      path: '/programmation/:id',
      name: 'evenement',
      component: () => import('@/pages/Evenement.vue')
    }
  ]
})

export default router
