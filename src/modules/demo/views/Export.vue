<template>
  <div>
    <el-button type='success' plain size='small' @click='export2Excel'>导出excel</el-button>
    <el-button type='success' plain size='small' @click='updateUser'>修改登录用户</el-button>
  </div>
</template>
<script>
// import Blob from '@/assets/excel/Blob'
// import Export2Excel from '@/assets/excel/Export2Excel.js'
export default {
  data () {
    return {
      tableData: [
        { 'index': '0', 'nickName': '沙滩搁浅我们的旧时光', 'name': '小明' },
        { 'index': '1', 'nickName': '女人天生高贵', 'name': '小红' },
        { 'index': '2', 'nickName': '海是彩色的灰尘', 'name': '小兰' }
      ]
    }
  },
  methods: {
    export2Excel: function () {
      require.ensure([], () => {
        const { exportJsonToExcel } = require('@/assets/excel/Export2Excel')
        const tHeader = ['序号', '昵称', '姓名']
        // 上面设置Excel的表格第一行的标题
        const filterVal = ['index', 'nickName', 'name']
        // 上面的index、nickName、name是tableData里对象的属性
        let list = []
        // const list = this.tableData
        let d = { 'index': '0', 'nickName': '沙滩搁浅我们的旧时光', 'name': '小明' }
        for (let a = 0; a < 100000; a++) {
          list.push(d)
        }
        // 把data里的tableData存到list
        const data = this.formatJson(filterVal, list)
        // console.log(data)
        exportJsonToExcel(tHeader, data, '列表excel')
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    updateUser () {
      let userInfo = {
        name: 'UpdateUser',
        img: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png'
      }
      this.$store.commit('login', userInfo)
    }
  }
}
</script>
