<template>
  <el-row >
    <el-col :span="24" class="disc">
      <h3>关于本DEMO</h3>
      <div>后端工程师写vue之路。</div>
      <div>使用vue、element ui作为基础的脚手架。在这个基础上进一步的做了优化，使得在以后得开发过程中只关注业务，不需要考虑整体的结构。</div>
    </el-col>

    <el-col :span="24" class="disc">
      <h3>启动</h3>
      <div>
        npm run serve 默认启动<br>
        npm run serve-dev  启动dev环境<br>
        npm run serve-local  启动local环境
      </div>
    </el-col>
    <el-col :span="24" class="disc">
      <h3>打包</h3>
      <div>
        npm run build 全部工程打包<br>
        npm run build-test demo 指定环境和项目打包<br>
        npm run build-prod demo 指定环境和项目打包
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>
<style>
.disc {
  padding-left: 10px
}
</style>
