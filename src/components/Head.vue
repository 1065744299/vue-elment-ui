<template>
  <el-col :span="24" class="header">
    <el-col :span="10" class="logo " :class="isCollapse?'logo-collapse-width':'logo-width'">
      {{isCollapse?'':sysName}}
      <img src="../assets/w.jpg" width="66px" height="100%" v-show="isCollapse"/>
    </el-col>
    <el-col :span="10">
      <div class="tools">
        <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="pchangeCollapse"></i>
      </div>
    </el-col>
    <el-col :span="4" class="userinfo">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link userinfo-inner"><img :src="img"/>{{name}}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item @click.native="logoutHandle">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
</template>
<script>
let userInfo = {
  name: '苏三杰',
  img: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png'
}
export default {
  props: {
    'isCollapse': {
      type: Boolean,
      default: true
    },
    'userInfo': {
      type: Object,
      default: () => userInfo
    },
    'sysName': {
      type: String,
      default: 'WEBDEMO'
    }
  },
  data () {
    return {}
  },
  computed: {
    'name': function () {
      return this.userInfo.name
    },
    'img': function () {
      return this.userInfo.img
    }
  },
  methods: {
    pchangeCollapse: function () {
      this.$emit('changeCollapse')
    },
    logoutHandle: function () {
      this.$confirm('确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // })
        this.$emit('logoutHandle')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>
<style scoped>
.header {
  height: 60px;
  line-height: 60px;
  background: #67C23A;
  color:#fff
}

.userinfo {
  height: 60px;
  line-height: 60px;
  text-align: right;
  padding-right: 35px;
  float: right;
}
  .userinfo-inner {
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    color:#fff;
  }
  .userinfo-inner>img {
    cursor: pointer;
    color:#fff;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  .logo {
    height:60px;
    font-size: 22px;
    border-color: rgba(238,241,146,0.3);
    border-right-width: 1px;
    border-right-style: solid;
  }
  .txt {
    color:#fff;
  }

  .logo-width{
    width:202px;
    padding-left:20px;
    padding-right:20px;
  }
  .logo-collapse-width{
    width:65px;
    padding-left:0px;
    padding-right:0px;
  }
  .tools{
    padding: 0px 23px;
    width:14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
</style>
