const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy: {
      '/api': {
        target: 'https://vue-basic-64381-default-rtdb.firebaseio.com/blog/',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
