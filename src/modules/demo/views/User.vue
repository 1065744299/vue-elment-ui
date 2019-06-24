<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="24">
        <div  class="bg-purple-dark">
        <el-form :inline="true" :model="formInline">
          <el-form-item label="用户名">
            <el-input v-model="formInline.user" size="small" placeholder="用户名"></el-input>
          </el-form-item>
           <el-form-item label="用户名">
            <el-input v-model="formInline.user" size="small" placeholder="用户名"></el-input>
          </el-form-item>
           <el-form-item label="用户名">
            <el-input v-model="formInline.user" size="small" placeholder="用户名"></el-input>
          </el-form-item>
           <el-form-item label="用户名">
            <el-input v-model="formInline.user" size="small" placeholder="用户名"></el-input>
          </el-form-item>
           <el-form-item label="用户名">
            <el-input v-model="formInline.user" size="small" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" size="small" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small">查询</el-button>
          </el-form-item>
        </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-button plain size="small">朴素按钮</el-button>
      <el-button type="primary" plain size="small" @click="userAdd">添加用户</el-button>
      <el-button type="success" plain size="small">成功按钮</el-button>
      <el-button type="info" plain size="small">信息按钮</el-button>
      <el-button type="warning" plain size="small">警告按钮</el-button>
      <el-button type="danger" plain size="small" @click="userDel">删除用户</el-button>
    </el-row>
    <el-row>
      <Table v-bind="options">
        <el-table-column label="操作" width="150">
          <template scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button plain type="danger" size="mini" @click="handleDel(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </Table>
    </el-row>
    <el-row style="background: #f2f2f2;">
      <div  class="bg-purple-dark">
        <Page
          :currentPage="currentPage"
          :total="total"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        />
      </div>
    </el-row>
    <UserAdd  ref="userAddView" :pdialogFormVisible="pdialogFormVisible"/>
  </div>
</template>
<script>
import Table from '@/components/Table.vue'
import Page from '@/components/Page.vue'
import UserAdd from './UserAdd.vue'
let users = [
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区'
  }
]
// let selectedIds = []
export default {
  components: {
    Table,
    Page,
    UserAdd
  },
  data () {
    var _this = this
    return {
      pdialogFormVisible: false,
      currentPage: 4,
      total: 1400,
      selectedIds: [],
      formInline: {
        user: '',
        region: ''
      },
      options: {
        'datas': users,
        tableAttrs: {
          'size': 'small',
          'border': true
        },
        tableEvents: {
          'select': function (selection, row) {
            _this.selectedIds = selection.map(u => {
              return u.id
            })
          }
        },
        columns: [
          {
            'type': 'selection',
            'width': '55'
          },
          {
            'type': 'index',
            'label': '序号',
            'width': '60'
          },
          {
            'prop': 'name',
            'label': '姓名',
            'width': '120'
          },
          {
            'prop': 'sex',
            'label': '性别',
            'width': '120',
            'formatter': function (row, column) {
              return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
            }
          },
          {
            'prop': 'age',
            'label': '年龄',
            'width': '120'
          },
          {
            'prop': 'addr',
            'label': '地址',
            'width': '250'
          }
        ]
      }
    }
  },
  methods: {
    userDel () {
      // 获取选中的用户id
      if (this.selectedIds.length === 0) {
        this.$alert('请选择要删除的用户', '提示', {
          confirmButtonText: '确定',
          callback: function () {
            // do something
          }
        })
        return
      }
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 正真的删除
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    userAdd () {
      this.$refs.userAddView.opendialog()
      // this.pdialogFormVisible = true
      // console.log(this.pdialogFormVisible)
    },
    handleEdit: function (index, row) {
      console.log(index)
      console.log(row)
    },
    handleSizeChange (val) {
      console.log('每页 条' + val)
    },
    handleCurrentChange (val) {
      console.log('当前页: ' + val)
    },
    setSelectedIds (ids) {
      this.selectedIds = ids
    }
  }
}
</script>
<style scoped>
  .bg-purple-dark {
    border-radius: 4px;
    background: #EEF1F6;
    padding: 10px;
  }
  .el-form-item {
    margin: 5px;
  }
  .el-row {
    margin-bottom: 5px;
  }
</style>
