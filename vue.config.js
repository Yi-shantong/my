const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭eslint语法检测
  //在vue.config.js中实现的代理配置,原理也是使用node.js中的代理模块 http-proxy-middleware 实现的
  //将项目中的所有的接口ajax的api请求,代理到远程的服务器,这样就解决了前端的跨域了,这样不用请求后端设置跨域了
  devServer: {
    proxy: {  //proxy 代理的意思
      '/api': {  //api表示当请求的地址包含/api字段,那么该请求我就代理到target目标地址
        target: 'http://kumanxuan1.f3322.net:8001',
        ws: true,  //远程连接 允许
        changeOrigin: true //设置跨域 ,允许
      }
    }
  }
})
