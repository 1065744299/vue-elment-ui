import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: () => import('./views/User.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/MyMain.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('./views/User.vue')
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('./views/Order.vue')
        },
        {
          path: 'echarts',
          name: 'echarts',
          component: () => import('./views/Echarts.vue')
        },
        {
          path: 'export',
          name: 'export',
          component: () => import('./views/Export.vue')
        },
        {
          path: 'about1',
          name: 'about1'
        },
        {
          path: 'about2',
          name: 'about2'
        },
        {
          path: 'ioc',
          name: 'ioc'
        }
      ]
    }
  ]
})
