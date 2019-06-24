<template>
  <div id="app">
    <Home :sysName='sysName' :userInfo='userInfo' :menuJson='menuJson' @logoutHandle='logoutHandle'/>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import Home from '@/components/Home.vue'
import axios from '../utils/http'
// 用户
// let userInfo = {
//   name: '苏三杰',
//   img: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png'
// }
// 系统名称
let sysName = 'WXD-DEMO'
// 菜单
let menuJson = [
  {
    id: '1',
    name: '首页',
    type: 'menu-item',
    url: '/main/home',
    icon: 'el-icon-star-off',
    submenus: []
  },
  {
    id: '2',
    name: 'TableS',
    type: 'subMenu',
    url: '',
    icon: 'el-icon-s-grid',
    submenus: [
      {
        id: '3',
        name: '动态table',
        type: 'subMenu',
        url: '/main/about',
        icon: ''
      },
      {
        id: '4',
        name: '拖拽table',
        type: 'subMenu',
        url: '/main/about1',
        icon: ''
      },
      {
        id: '5',
        name: '综合table',
        type: 'subMenu',
        url: '/main/about2',
        icon: ''
      }
    ]
  },
  {
    id: '6',
    name: '列表demo',
    type: 'subMenu',
    url: '',
    icon: 'el-icon-user',
    submenus: [
      {
        id: '7',
        name: '用户列表',
        type: 'subMenu',
        url: '/main/user',
        icon: ''
      },
      {
        id: '8',
        name: '订单列表',
        type: 'subMenu',
        url: '/main/order',
        icon: ''
      }
    ]
  },
  {
    id: '9',
    name: '工具demo',
    type: 'subMenu',
    url: '',
    icon: 'el-icon-setting',
    submenus: [
      {
        id: '10',
        name: '常用报表',
        type: 'subMenu',
        url: '/main/echarts',
        icon: ''
      },
      {
        id: '11',
        name: '常用图标',
        type: 'subMenu',
        url: '/main/ioc',
        icon: ''
      },
      {
        id: '12',
        name: '导出demo',
        type: 'subMenu',
        url: '/main/export',
        icon: ''
      }
    ]
  }
]

export default {
  components: {
    Home
  },
  data () {
    return {
      // 'userInfo': this.$store.state.userInfo,
      'sysName': sysName,
      'menuJson': menuJson
    }
  },
  computed: {
    'userInfo': function () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    logoutHandle: function () {
      // TODO
      console.log('退出')
      this.$store.commit('login', {})
      this.$router.push({ 'path': '/login' })
    },
    testApi: function () {
      // http://10.98.3.27:8080/app/mock/data/139
      axios
        .get('http://10.98.3.27:8080/app/mock/data/139')
        .then(response => {
          console.info(response)
          console.info(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => console.log('finally'))
    }
  },
  created: function () {
    // this.testApi()
    // this.$router.push({ 'path': '/login' })
    console.log(this.$store.state)
  }
}
</script>
<style>
</style>
