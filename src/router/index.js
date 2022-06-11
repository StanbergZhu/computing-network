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
      {path: 'main_page1', name: 'MainPage1', component: () => import('../views/MainPage1'),},
      {path: 'main_page2', name: 'MainPage2', component: () => import('../views/MainPage2'),},
      {path: 'main_page4', name: 'MainPage4', component: () => import('../views/MainPage4'),},
      {path: 'main_page5', name: 'MainPage5', component: () => import('../views/MainPage5'),},
      {path: 'main_page6', name: 'MainPage6', component: () => import('../views/MainPage6'),},
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
