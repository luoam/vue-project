import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../home.vue'
import Test from '../test.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 路径
    path: '/',
    // 名称
    name: 'Home',
    // 组件名
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 虽然About.vue并没有被导出，可以使用如下方式定义路由组件
    component: () => import(/* webpackChunkName: "about" */ '../about.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }

]

const router = new VueRouter({
  routes
})

export default router

