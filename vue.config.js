// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
//   // lintOnSave: false
// })
const path = require('path')
const isDev = process.env.NODE_ENV === 'development' ? true : false

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: isDev ? './' : './',
  devServer: {
    // IP配置
    // host: '0.0.0.0',
    // 默认端口
    // port: 8080,
    // 启动gzip压缩
    // compress: true,
    // 运行打开
    open: true,
    // 热加载
    hot: true,
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/dev-api': {
        // 要代理的服务器地址  这里不用写 api
        target: 'http://127.0.0.1:6688/',
        changeOrigin: true // 是否跨域
        // pathRewrite: {
        //   ['^' + process.env.VUE_APP_BASE_API]: ''
        // }
      }
    }
  },
  //px转rem
  css: {
    loaderOptions: {
      // 全局引入变量和 mixin
      sass: {
        // additionalData & sass-loader版本10.1.1  prependData & sass-loader版本8.0.0
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      },
      postcss: {
        plugins: [
          require('autoprefixer')({
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
          }),
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propBlackList: ['vant'],
            exclude: RegExp(/node_modules/i),
            mediaQuery: false,
            propList: ['*'],
            unitPrecision: 3,
            minPixelValue: 2
          })
        ]
      }
    }
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
  }
}
