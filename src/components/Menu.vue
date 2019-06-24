<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#eef1f6"
      active-text-color="#20a0ff"
      :collapse-transition="false"
      text-color="#48576a"
      :router="true"
      >
      <template v-for="m in menus">
        <el-submenu v-if="m.type=='subMenu'" :index="m.id" :key="m.id">
          <template slot="title">
            <i :class="m.icon"></i>
            <span slot="title">{{m.name}}</span>
          </template>
          <el-menu-item v-for="mi in m.submenus" :key="mi.id" :index="mi.url" :route="{path: mi.url}" @click.native="selected(mi.name, mi.url)">
            {{mi.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-if="m.type=='menu-item'" :index="m.url" :key="m.id" :route="{path: m.url}" @click.native="selected(m.name, m.url)">
          <i :class="m.icon"></i>
          <span slot="title">
            {{m.name}}
          </span>
        </el-menu-item>
      </template>
  </el-menu>
</div>
</template>
<script>
let menuJson = [
  {
    id: '1',
    name: '首页',
    type: 'menu-item',
    url: '/',
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
        url: '/about',
        icon: ''
      },
      {
        id: '4',
        name: '拖拽table',
        type: 'subMenu',
        url: '/about1',
        icon: ''
      },
      {
        id: '5',
        name: '综合table',
        type: 'subMenu',
        url: '/about2',
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
        url: '/user',
        icon: ''
      }
    ]
  }
]
export default {
  // props: ['isCollapse', 'defaultActive', 'menuJson'],
  props: {
    'isCollapse': {
      type: Boolean,
      default: true
    },
    'defaultActive': {
      type: String,
      default: '首页'
    },
    'menuJson': {
      type: Array,
      default: () => menuJson
    }
  },
  data () {
    return {
      menus: this.menuJson
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    selected (name, index) {
      this.$emit('selectedTab', name, index)
    }
  }
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu {
    border-right: solid 0px #e6e6e6;
  }
</style>
