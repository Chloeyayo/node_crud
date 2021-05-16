import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/form',
    component: ()=> import('@/views/Home.vue'),
    children:[
      {
        path: '/form',
        component: ()=> import('@/components/form')
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
