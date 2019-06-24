<template>
<div>
  <el-table :data="datas" v-bind="tableAttrs" v-on="tableEvents" :cell-style="{padding:0}" style="width: 100%;" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
    <el-table-column v-for="(item, index) in columns" :key="index" v-bind="item"></el-table-column>
    <slot></slot>
  </el-table>
</div>
</template>
<script>
export default {
  props: ['datas', 'tableAttrs', 'tableEvents', 'columns'],
  methods: {
  }
}
</script>
<style>
.el-table__row>td {
  height: 30px
}
</style>
