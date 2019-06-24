<template>
  <el-tabs v-model="myEditableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="goRoute">
    <el-tab-pane
      v-for="(item) in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      :myindex="item.index"
    >
      <div class="mymain">
        <router-view/>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  props: ['editableTabsValue'],
  data () {
    return {
      editableTabs: [{
        title: '首页',
        name: '首页',
        index: '/main/home'
      }],
      myEditableTabsValue: this.editableTabsValue
    }
  },
  methods: {
    addTab (name, index) {
      for (var t in this.editableTabs) {
        if (this.editableTabs[t].name === name) {
          this.myEditableTabsValue = name
          return
        }
      }
      this.editableTabs.push({
        title: name,
        name: name,
        index: index
      })
      this.myEditableTabsValue = name
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.myEditableTabsValue
      // let activeName = ''
      let _index = ''
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
              _index = nextTab.index
            }
          }
        })
      }
      this.$router.push({ 'path': _index })
      this.$emit('selectedTab', activeName, _index)
      this.myEditableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    goRoute (args) {
      let tabs = this.editableTabs
      let _thisTab = tabs.filter(tab => tab.name === args.name)[0]
      this.$router.push({ 'path': _thisTab.index })
      this.$emit('selectedTab', _thisTab.name, _thisTab.index)
      // this.$emit('myRoute', _thisTab.index)
    }
  }
}
</script>
<style scoped>
.mymain {
  padding: 0 5px
}
</style>
