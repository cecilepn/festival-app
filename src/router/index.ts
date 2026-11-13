import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index.vue')
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
    },
    {
      path: '/artistes',
      name: 'artistes',
      component: () => import('@/pages/Artistes.vue')
    },
    {
      path: '/artistes/:id',
      name: 'artiste',
      component: () => import('@/pages/Artiste.vue')
    },
    {
      path: '/infos-pratiques',
      name: 'infos-pratiques',
      component: () => import('@/pages/Infos.vue')
    },
    {
      path: '/notre-histoire',
      name: 'notre-histoire',
      component: () => import('@/pages/History.vue')
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('@/pages/LegalNotice.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})

export default router
