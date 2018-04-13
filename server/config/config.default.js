'use strict'
const path = require('path')
module.exports = appInfo => {
  const config = exports = {}
  config.middleware = ['gzip']
  config.gzip = {threshold: 1024} //大于1m开启gzip压缩
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523033149298_4256'
  config.static = {
    prefix: '/public/',
    dir: path.join(process.cwd(), 'app/public/static')
  }
  config.security = {
    security: {
      csrf: {
        // enable: false,
      },
    }
  }
  return config
}


