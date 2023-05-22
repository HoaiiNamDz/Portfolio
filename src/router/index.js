import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'default'
      },
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        layout: 'primary'
      },
      component: () => import('../pages/About.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      meta: {
        layout: 'primary'
      },
      component: () => import('../pages/Experience.vue')
    },
    {
      path: '/works',
      name: 'works',
      meta: {
        layout: 'primary'
      },
      component: () => import('../pages/Works.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        layout: 'primary'
      },
      component: () => import('../pages/Contact.vue')
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active-class'
})

export default router
