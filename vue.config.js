const { options } = require("less")

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('ejs')
      .test(/\.tpl$/)
      .use('ejs-loader')
      .loader('ejs-loader')
      .tap(options => {
        options = {
          esModule: false
        }
        return options
      })
      .end()
  }
}
