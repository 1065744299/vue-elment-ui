<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[20, 40, 80, 100]"
    :page-size="20"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    >
  </el-pagination>
</template>
<script>
export default {
  props: ['currentPage', 'total'],
  data () {
    return {
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange (val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>
<style>

</style>
