import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      meta: {
        layout: 'default'
      },
      
      component: () => import('../pages/about.vue')
    },
    {
      path: '/project',
      name: 'project',
      meta: {
        layout: 'default'
      },
      component: () => import('../pages/project.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        layout: 'default'
      },
      component: () => import('../pages/contact.vue')
    },
    {
      path: '/work',
      name: 'work',
      meta: {
        layout: 'default'
      },
      component: () => import('../pages/work.vue')
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active-class'
})

export default router
