var projectname = process.argv[5]
var glob = require('glob')

function getEntry () {
  var entries = {}
  if (process.env.NODE_ENV === 'production') {
    entries = {
      index: {
        // page的入口
        entry: 'src/modules/' + projectname + '/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        title: projectname,
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
    }
  } else {
    if (typeof projectname !== 'undefined') {
      entries = {
        index: {
          // page的入口
          entry: 'src/modules/' + projectname + '/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          title: projectname,
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
      }
    } else {
      var items = glob.sync('./src/modules/*/*.js')
      for (var i in items) {
        var filepath = items[i]
        var fileList = filepath.split('/')
        var fileName = fileList[fileList.length - 2]
        entries[fileName] = {
          entry: `src/modules/${fileName}/main.js`,
          // 模板来源
          template: `public/index.html`,
          // 在 dist/index.html 的输出
          filename: `${fileName}.html`,
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', fileName]
        }
      }
    }
  }
  return entries
}

var pages = getEntry()
// vue.config.js
module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  // outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    port: 8888
  },
  // 生产禁止显示源代码
  productionSourceMap: false,
  // 输出文件目录
  outputDir: 'dist/' + projectname,
  pages: pages
}
