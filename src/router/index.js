import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/LayoutIndex.vue'

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: '记录' },
    children: [
      {
        path: '/home',
        name: 'HomeView',
        hidden: true,
        component: () => import('@/views/HomeView.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/devlog',
        name: 'DevelopLog',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/DevelopLog.vue'),
        meta: { title: '开发日志' }
      }
    ]
  },
  {
    path: '/utils',
    redirect: '/utils/draw',
    component: Layout,
    meta: { title: '小组件' },
    children: [
      {
        path: 'draw',
        name: 'DrawComponent',
        component: () => import('@/views/utils-modelus/DrawComponent.vue'),
        meta: { title: '翻牌器' }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
