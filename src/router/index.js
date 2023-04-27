
'use strict';

import { createRouter, createWebHistory } from 'vue-router'
import MovementView from '../views/PlayerView.vue'
import EnemyView from '../views/EnemyView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/ChartView.vue')
    },
    {
      path: '/movement',
      name: 'movement',
      component: MovementView
    },
    {
      path: '/enemy',
      name: 'enemy',
      component: EnemyView
    }
  ]
})

export default router
