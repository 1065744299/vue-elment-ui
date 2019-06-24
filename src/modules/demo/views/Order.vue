<template>
  <CommonPage :formEntity="formEntity" :queryFunction="queryF" :tableEntity="tableEntity" :buttons="buttons"></CommonPage>
</template>
<script>
import CommonPage from '@/components/CommonPage.vue'
// 查询表单数组
let formEntityDemo = [
  {
    template: 'input',
    type: 'string',
    name: 'name',
    label: '用户名',
    placeholder: '用户名'
  },
  {
    template: 'input',
    type: 'number',
    name: 'age',
    label: '年龄',
    placeholder: '年龄'
  },
  {
    template: 'date',
    type: 'date',
    name: 'birthday',
    label: '生日',
    placeholder: '生日'
  },
  {
    template: 'date',
    type: 'month',
    name: 'month',
    label: '月份',
    placeholder: '月份'
  },
  {
    template: 'date',
    type: 'monthrange',
    name: 'monthrange',
    label: '月份区间',
    'range-separator': '至',
    'start-placeholder': '开始月份',
    'end-placeholder': '结束月份',
    placeholder: '月份区间'
  },
  {
    template: 'date',
    type: 'daterange',
    name: 'qutime',
    label: '日期区间',
    'start-placeholder': '开始日期',
    'end-placeholder': '结束日期',
    'default-time': ['00:00:00', '23:59:59'],
    placeholder: '日期区间'
  },
  {
    template: 'select',
    type: 'select',
    name: 'region',
    label: '活动区域',
    placeholder: '活动区域',
    options: [
      {
        label: '区域一',
        value: 'shanghai'
      },
      {
        label: '区域二',
        value: 'beijing'
      },
      {
        label: '区域三',
        value: 'shanxi'
      }
    ]
  }
]
// 数据列表
let users = [
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '001',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '002',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '003',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '004',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '005',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '006',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '007',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '008',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '009',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '010',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '011',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 0,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  },
  {
    'id': 1,
    'name': '刘娟',
    'sex': 1,
    'age': 23,
    'addr': '香港特别行政区 新界 西贡区',
    'orderNo': '012',
    'amount': 200
  }
]
// 列表属性
let tableDemo = {
  page: {
    currentPage: 1,
    total: 1400,
    // 改变每页记录数
    handleSizeChange: (size) => {
      console.log('order页面' + size)
    },
    // 点击其他页面
    handleCurrentChange: (currentPage) => {
      console.log('order页面' + currentPage)
    }
  },
  options: {
    // 数据
    'datas': users,
    // 表格属性
    tableAttrs: {
      'size': 'small',
      'border': true
    },
    // 表格事件
    tableEvents: {
      'select': function (selection, row) {
        console.log(selection)
        console.log('order页面' + selection)
      }
    },
    // 列 不包括操作列
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
        'prop': 'orderNo',
        'label': '订单号',
        'width': '120'
      },
      {
        'prop': 'amount',
        'label': '金额',
        'width': '120'
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
        'label': '收货地址',
        'width': '250'
      }
    ],
    // 操作列
    operationColumn: [
      {
        'label': '编辑',
        'type': 'primary',
        'callback': (index, row) => {
          console.log(row)
        }
      },
      {
        'label': '查看',
        'type': 'danger',
        'callback': (index, row) => {
          console.log(row)
        }
      }
    ]
  }
}
// 按钮
let buttons = [
  {
    'label': '添加订单',
    'type': 'primary',
    'callback': () => {
      console.log('添加订单')
    }
  },
  {
    'label': '修改订单',
    'type': 'warning',
    'callback': () => {
      console.log('修改订单')
    }
  },
  {
    'label': '删除订单',
    'type': 'danger',
    'callback': () => {
      console.log('删除订单')
    }
  },
  {
    'label': '订单详情',
    'type': 'info',
    'callback': () => {
      console.log('订单详情')
    }
  }
]
export default {
  components: {
    CommonPage
  },
  data () {
    return {
      formEntity: formEntityDemo,
      tableEntity: tableDemo,
      buttons: buttons
    }
  },
  methods: {
    // 查询方法
    queryF: function (a) {
      // 查询的实体
      console.log(a)
    }
  }
}
</script>
