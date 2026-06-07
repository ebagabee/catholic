import { createRouter, createWebHistory } from 'vue-router'
import RosaryView from '@/views/RosaryView.vue'
import BiblePlanView from '@/views/BiblePlanView.vue'
import BibleBooksView from '@/views/BibleBooksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'rosary',
      component: RosaryView,
    },
    {
      path: '/biblia-1-ano',
      name: 'bible-plan',
      component: BiblePlanView,
    },
    {
      path: '/livros',
      name: 'bible-books',
      component: BibleBooksView,
    },
  ],
})

export default router
