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
    }
  ]
})

export default router
