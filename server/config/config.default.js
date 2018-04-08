'use strict'
const path = require('path')
console.log(process.cwd())
module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523033149298_4256'

  // add your config here
  config.middleware = ['gzip']
  config.gzip = {threshold: 1024}

  return config
}

exports.static = {
  prefix: '/public/',
  dir: path.join(process.cwd(), 'app/public/static')
}