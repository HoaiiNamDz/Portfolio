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
      
      component: () => import('../pages/About.vue')
    },
    {
      path: '/project',
      name: 'project',
      meta: {
        layout: 'default'
      },
      component: () => import('../pages/Project.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        layout: 'default'
      },
      component: () => import('../pages/Contact.vue')
    },
    {
      path: '/work',
      name: 'work',
      meta: {
        layout: 'default'
      },
      component: () => import('../pages/Work.vue')
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active-class'
})

export default router
