// 引入data.json数据
const appData = require('data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
