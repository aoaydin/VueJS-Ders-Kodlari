import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    
  },
  {
    path: '/AddProject',
    name: 'addProject',
    component: () => import('../views/AddProject.vue'),

  },
  {
    path: '/projects:id',
    name: 'editProject',
    component: () => import('../views/EditProject.vue'),
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
