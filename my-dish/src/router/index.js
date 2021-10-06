import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Profile from '../views/Profile.vue'
import Recipe from '../views/Recipe.vue'
import Mypage from '../views/Mypage.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
