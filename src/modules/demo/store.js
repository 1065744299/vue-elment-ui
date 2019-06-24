import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
    // name: 'Vuex',
    // img: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png'
    }
  },
  mutations: {
    login (state, user) {
      state.userInfo = user
    }
  },
  actions: {

  }
})
