var cooking = require('cooking')
cooking.set({
  entry: './src/index.js',
  dist: 'dist',
  template: './index.html',
  devServer: true,
  assetsPath: 'static',
  moduleName: 'vue-address-picker',
  chunk: false,
  format: 'cjs',
  // Production
  clean: false,
  hash: false,
  sourceMap: false,
  extractCSS: true,
  extends: ['vue', 'lint'],
  alias: {
    'src': require('path').join(__dirname, './src')
  }
})

module.exports = cooking.resolve()