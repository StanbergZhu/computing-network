import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalPage from "@/views/PersonalPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manager',
    component: ()=>import('../views/Manager.vue'),
    redirect:"/personal_page",
    children:[
      {path: 'personal_page', name: 'PersonalPage', component: () => import('../views/PersonalPage'),},
      {path: 'main_page', name: 'MainPage', component: () => import('../views/MainPage'),},

    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
