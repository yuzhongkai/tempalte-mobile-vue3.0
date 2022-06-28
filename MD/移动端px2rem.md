# vue-cli3.0 移动端使用lib-flexible和postcss-pxtorem将px单位自动转化为rem单位解决自适应

> 1.安装插件
```js
yarn add lib-flexible

yarn add postcss-pxtorem --dev

```
> 2.main.js中引入
```js

import 'lib-flexible'

```

> 3.在vue.config.js配置
```js
module.exports = {
  ...
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
            rootValue: 37.5,      //换算基数
            propBlackList: ['vant'],
            exclude: RegExp(/node_modules/i),
            selectorBlackList:[], // 要忽略并保留为px的选择器
            mediaQuery: false,    //允许在媒体查询中转换px
            propList: ['*'],
            unitPrecision: 3,
            minPixelValue: 2      //设置要替换的最小像素值,默认0
          })
        ]
      }
    }
  }
}

```