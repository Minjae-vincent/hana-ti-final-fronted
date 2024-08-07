import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerView from '../views/registerView.vue'
import loginView from '../views/loginView.vue'
import registerInfoView from '@/views/registerInfoView.vue' // Import the new view

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: registerView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/register-info',
      name: 'register-info',
      component: registerInfoView
    }
  ]
})

export default router
