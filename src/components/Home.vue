<template>
  <el-container>
    <el-header>
      <Head :isCollapse='isCollapse' @changeCollapse="changeCollapsed" :sysName='sysName' :userInfo='homeUserInfo' @logoutHandle='logoutHandle'></Head>
    </el-header>
    <el-container>
      <el-aside :class="isCollapse?'menu-collapsed':'menu-expanded'">
        <Menu :isCollapse='isCollapse' :defaultActive="defaultActive" :menuJson='menuJson' @selectedTab="selectedTab(arguments)"/>
      </el-aside>
      <el-main>
        <div class="my-main">
          <Main :editableTabsValue="editableTabsValue" ref="myMain" @selectedTab="mainSelectedTab(arguments)"/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Head from '@/components/Head.vue'
import Main from '@/components/Main.vue'
export default {
  name: 'app',
  props: ['sysName', 'userInfo', 'menuJson'],
  components: {
    Menu,
    Head,
    Main
  },
  data () {
    return {
      // 菜单是否折叠
      'isCollapse': false,
      // 主展示区默认选项卡
      'editableTabsValue': '首页',
      // 菜单默认选中
      'defaultActive': '/main/home'
    }
  },
  computed: {
    'homeUserInfo': function () {
      return this.userInfo
    }
  },
  methods: {
    changeCollapsed: function () {
      this.isCollapse = !this.isCollapse
    },
    selectedTab: function (args) {
      this.editableTabsValue = args[0]
      this.defaultActive = args[1]
      this.$refs.myMain.addTab(this.editableTabsValue, this.defaultActive)
    },
    mainSelectedTab: function (args) {
      this.editableTabsValue = args[0]
      this.defaultActive = args[1]
    },
    myRoute: function (index) {
      this.$router.push({ 'path': index })
    },
    logoutHandle: function () {
      this.$emit('logoutHandle')
    }
  },
  created: function () {
    this.myRoute(this.defaultActive)
  }
}
</script>
<style>
  html,body,#app,.el-container {
    height: 100%;
  }
  .el-header {
    color: #333;
    line-height: 60px;
    padding: 0 0px;
  }
  .el-aside {
    background-color: #eef1f6;
    color: #333;
    line-height: 200px;
  }
  .el-main {
    color: #333;
    padding: 0 0 0 0px;
    width: 100%;
  }
  .menu-collapsed{
    flex:0 0 65px;
    width: 65px;
  }
  .menu-expanded{
    flex:0 0 201px;
    width: 201px;
  }
  body{
    margin: 0px;
  }
  main {
    height:  100%;
    overflow-y: auto;
  }
</style>
