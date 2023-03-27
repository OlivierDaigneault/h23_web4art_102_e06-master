import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import("@/views/PageAccueil.vue"),
    },
    {
      path: '/expo1',
      name: 'expo1',
      component: () => import("@/views/PageAccueilExpo1.vue"),
    },
    {
      path: '/expo2',
      name: 'expo2',
      component: () => import("@/views/PageAccueilExpo2.vue"),
    },
    {
      path: '/expo3',
      name: 'expo3',
      component: () => import("@/views/PageAccueilExpo3.vue"),
    },
  ]
})

export default router
