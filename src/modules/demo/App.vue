<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import axios from './utils/http'

export default {
  components: {
    // Home
  },
  data () {
    return {
      // userInfo: userInfo,
      // sysName: sysName,
      // menuJson: menuJson
    }
  },
  methods: {
    logoutHandle: function () {
      // TODO
      console.log('退出')
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
    this.$router.push({ 'path': '/main/home' })
  }
}
</script>
<style>
html, body, #app{
  width: 100%;
}
</style>
