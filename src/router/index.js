import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ContactDetails from '@/views/ContactDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts/:id',
    name: 'ContactDetails',
    component: ContactDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
