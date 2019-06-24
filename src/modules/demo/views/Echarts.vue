<template>
  <div>
    <el-row :gutter="20" class="echarts-row">
      <el-col :span="6"><div id = "echartss" class="echarts-div" ref="myEchart"></div></el-col>
      <el-col :span="6"><div id = "echartss1" class="echarts-div" ref="myEchart1"></div></el-col>
      <el-col :span="6"><div id = "echartss2" class="echarts-div" ref="myEchart2"></div></el-col>
      <el-col :span="6"><div id = "echartss3" class="echarts-div" ref="myEchart3"></div></el-col>
    </el-row>
    <el-row :gutter="20" class="echarts-row">
      <el-col :span="6"><div id = "echartss4" class="echarts-div" ref="myEchart4"></div></el-col>
      <el-col :span="6"><div id = "echartss5" class="echarts-div" ref="myEchart5"></div></el-col>
      <el-col :span="6"><div id = "echartss6" class="echarts-div" ref="myEchart6"></div></el-col>
      <el-col :span="6"><div id = "echartss7" class="echarts-div" ref="myEchart7"></div></el-col>
    </el-row>
    <!-- <el-row :gutter="20" class="echarts-row">
      <el-col :span="6"><div id = "echartss8" class="echarts-div" ref="myEchart8"></div></el-col>
      <el-col :span="6"><div id = "echartss9" class="echarts-div" ref="myEchart9"></div></el-col>
      <el-col :span="6"><div id = "echartss10" class="echarts-div" ref="myEchart10"></div></el-col>
      <el-col :span="6"><div id = "echartss11" class="echarts-div" ref="myEchart11"></div></el-col>
    </el-row>
    <el-row :gutter="20" class="echarts-row">
      <el-col :span="6"><div id = "echartss12" class="echarts-div" ref="myEchart12"></div></el-col>
      <el-col :span="6"><div id = "echartss13" class="echarts-div" ref="myEchart13"></div></el-col>
      <el-col :span="6"><div id = "echartss14" class="echarts-div" ref="myEchart14"></div></el-col>
      <el-col :span="6"><div id = "echartss15" class="echarts-div" ref="myEchart15"></div></el-col>
    </el-row> -->
  </div>
</template>
<script>
import echarts from 'echarts'
let data = []
for (var i = 0; i <= 360; i++) {
  var t = i / 180 * Math.PI
  var r = Math.sin(2 * t) * Math.cos(2 * t)
  data.push([r, i])
}
export default {
  // 挂载前初始化echarts实例
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(this.$refs.myEchart)
    // 绘制图表，this.echarts1_option是数据
    this.myChart.setOption(this.echarts_option)

    this.myChart1 = echarts.init(this.$refs.myEchart1)
    this.myChart1.setOption(this.echarts1_option)

    this.myChart2 = echarts.init(this.$refs.myEchart2)
    this.myChart2.setOption(this.echarts2_option)

    this.myChart3 = echarts.init(this.$refs.myEchart3)
    this.myChart3.setOption(this.echarts3_option)

    this.myChart4 = echarts.init(this.$refs.myEchart4)
    this.myChart4.setOption(this.echarts4_option)
  },
  data () {
    return {
      echarts4_option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      },
      echarts3_option: {
        title: {
          text: '简单柱状图'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      },
      echarts2_option: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          showSymbol: false,
          data: data
        }],
        animationDuration: 2000
      },
      echarts_option: {
        title: {
          text: '折线图'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      },
      echarts1_option: {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        // legend: {
        //   data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
.echarts-row {
  height: 300px;
}
.echarts-div {
  width: 100%;
  height: 300px;
}
</style>
