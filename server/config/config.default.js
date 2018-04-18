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
    csrf: {
      enable: false,
    },
  }
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'skyworth',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: 'skyworth147',
  }
  config.session = {
    key: 'EGG_SESSION',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: false,
    encrypt: false,
  }

  return config
}



