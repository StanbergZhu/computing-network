import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalPage from "@/views/PersonalPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/manager',
    name: 'Manager',
    component: ()=>import('../views/Manager.vue'),
    redirect:"/personal_page",
    children:[
      {path: 'personal_page', name: 'PersonalPage', component: () => import('../views/PersonalPage'),},
      {path: 'main_page', name: 'MainPage', component: () => import('../views/MainPage'),},

    ]
  },
  {
    path: '/',
    name: 'Login',
    component: ()=>import('../views/Login'),
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=>import('../views/Register')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
