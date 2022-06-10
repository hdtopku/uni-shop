//vue.config.js
const TransformPages = require('uni-read-pages')
const {
  webpack
} = new TransformPages()
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        ROUTES: webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ['path', 'name', 'aliasPath', 'meta']
          });
          return JSON.stringify(tfPages.routes)
        }, true)
      })
    ],
    // performance: {
    //   hints: 'warning',
    //   // 入口起点的最大体积
    //   maxEntrypointSize: 50000000,
    //   // 生成文件的最大体积
    //   maxAssetSize: 30000000,
    //   // 只给出 js 文件的性能提示
    //   assetFilter: function(assetFilename) {
    //     return assetFilename.endsWith('.js')
    //   }
    // }
  },
  transpileDependencies: ['uni-simple-router']
}
