import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import http from './utils/http'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, http)

Vue.use(ElementUI)
// Vue.use(http)
Vue.config.productionTip = false
// 做拦截
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.path !== '/login') {
    // 判断当前的user_id是否存在 ； 登录存入的user_id
    if (store.state.userInfo.name) {
      next()
    } else {
      next({
        path: '/login',
        // 将要跳转路由的path作为参数，传递到登录页面
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  // http,
  render: h => h(App)
}).$mount('#app')
