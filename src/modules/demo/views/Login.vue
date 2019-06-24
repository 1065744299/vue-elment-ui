<template>
  <div class="login-main">
    <el-row class="login">
      <el-col :span="4" :offset="6">
        <div class="login-info">
          <div>VUE</div>
          <div>VUEX</div>
          <div>router</div>
          <div>element UI</div>
          <div>echarts</div>
          <div>......</div>
        </div>
      </el-col>
      <el-col :span="6" :offset="3">
        <div class="login-div">
          <h3>登录</h3>
          <el-form :model="login" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名称" prop="name">
              <el-input v-model="login.name" ></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="pwd">
              <el-input v-model="login.pwd"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="updateUser('ruleForm')">模拟登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      'login': {
        'name': '',
        'pwd': ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    updateUser (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let userInfo = {
            name: this.login.name,
            img: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png'
          }
          this.$store.commit('login', userInfo)
          // 如果存在参数
          if (this.$route.query.redirect) {
            let redirect = this.$route.query.redirect
            // 则跳转至进入登录页前的路由
            this.$router.push(redirect)
          } else {
            // 否则跳转至首页
            this.$router.push('/main/home')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.login-main{
  width: 100%;
  height: 100%;
}
.login{
  margin-top: 15%;
  background-color: #67C23A
}
.login-info{
  height: 100%;
  padding: 20px 0 0 0;
}
.login-info>div{
  margin-bottom: 20px;
  font-size: 20px;
}
.login-div{
  padding: 20px 60px 40px 40px;
  background-color: #eef1f6
}
  body{
    margin: 0px;
  }
</style>
