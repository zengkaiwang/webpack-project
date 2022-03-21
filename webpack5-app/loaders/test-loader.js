const loaderUtils = require('loader-utils')

module.exports = function(source) {
  console.log('test-loader的内部逻辑')
  
  const { name } = loaderUtils.getOptions(this)
  console.log(name)
  
  return source
}