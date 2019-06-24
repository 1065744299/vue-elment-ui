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
    <el-col :span="24" class="disc">
      <h3>如果对你有帮助可以请作者喝杯咖啡</h3>
      <div>
        <img src="https://img-blog.csdnimg.cn/20190624175911884.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI1NDUxMTk5,size_16,color_FFFFFF,t_70" width="150px"/>
        &nbsp;&nbsp;
        <img src="https://img-blog.csdnimg.cn/20190624175942709.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI1NDUxMTk5,size_16,color_FFFFFF,t_70" width="150px"/>
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
