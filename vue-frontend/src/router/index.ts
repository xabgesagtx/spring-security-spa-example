import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login.vue";
import Hello from '@/views/Hello.vue';
import {helloResolverGuard} from "@/modules/resolvers";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello,
    beforeEnter: helloResolverGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
