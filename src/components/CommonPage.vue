<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="24" v-if="formEntity">
        <div  class="bg-purple-dark">
        <el-form :inline="true" :model="formInline">
          <template v-for="(item, index) in formEntity">
            <template v-if="item.template === 'input'">
              <el-form-item :label="item.label" :key="index">
                <el-input v-model="formInline[item.name]" size="small" v-bind="item"></el-input>
              </el-form-item>
            </template>
            <template v-if="item.template === 'date'">
              <el-form-item :label="item.label" :key="index">
                <el-date-picker v-model="formInline[item.name]" size="small" v-bind="item"></el-date-picker>
              </el-form-item>
            </template>
            <template v-if="item.template === 'select'">
              <el-form-item :label="item.label" :key="index">
                <el-select v-model="formInline[item.name]" size="small" v-bind="item">
                  <el-option v-for="(option, index) in item.options" :key="index" :label="option.label" :value="option.value"></el-option>
                </el-select>
              </el-form-item>
            </template>
          </template>
          <el-form-item>
            <el-button type="primary" size="small" @click="queryF">查询</el-button>
          </el-form-item>
        </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="buttons && buttons.length > 0">
      <el-button plain size="small" v-for="(item , index) in buttons" :key="index" v-bind="item" @click="buttonClick(item.callback)">{{item.label}}</el-button>
    </el-row>
    <el-row v-if="tableEntity">
      <Table v-bind="tableEntity.options">
        <el-table-column v-if="tableEntity.options.operationColumn && tableEntity.options.operationColumn.length > 0" label="操作">
          <template scope="scope">
            <el-button plain v-for="(item, index) in tableEntity.options.operationColumn" :key="index" size="mini" v-bind="item" @click="tableoperationcallback(scope.$index, scope.row,item.callback)">{{item.label}}</el-button>
          </template>
        </el-table-column>
      </Table>
    </el-row>
    <el-row v-if="tableEntity.page" style="background: #EEF1F6;">
      <div  class="bg-purple-dark">
        <Page
          :currentPage="tableEntity.page.currentPage"
          :total="tableEntity.page.total"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        />
      </div>
    </el-row>
  </div>
</template>
<script>
import Table from '@/components/Table.vue'
import Page from '@/components/Page.vue'

export default {
  props: {
    // 查询实体
    formEntity: {
      type: Array
    },
    queryFunction: {
      type: Function
    },
    tableEntity: {
      type: Object
    },
    buttons: {
      type: Array
    }
  },
  components: {
    Table,
    Page
  },
  data () {
    return {
      formInline: {}
    }
  },
  methods: {
    // 查询方法
    queryF () {
      if (this.queryFunction) {
        this.queryFunction(this.formInline)
      }
    },
    // 列表操作事件
    tableoperationcallback: function (index, row, callback) {
      if (callback) {
        callback(index, row)
      }
    },
    // 页面列表记录数改表
    handleSizeChange (val) {
      if (this.tableEntity.page && this.tableEntity.page.handleSizeChange) {
        this.tableEntity.page.handleSizeChange(val)
      }
    },
    // 点击其他页面
    handleCurrentChange (val) {
      if (this.tableEntity.page && this.tableEntity.page.handleCurrentChange) {
        this.tableEntity.page.handleCurrentChange(val)
      }
    },
    // 按钮点击事件
    buttonClick (fun) {
      if (fun) {
        fun()
      }
    }
  }
}
</script>
<style scoped>
  .bg-purple-dark {
    border-radius: 4px;
    background: #EEF1F6;
    padding: 5px;
  }
  .el-form-item {
    margin: 5px;
  }
  .el-row {
    margin-bottom: 5px;
  }
  .el-form-item__label {
    min-width: 70px;
  }
</style>
