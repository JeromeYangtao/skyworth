'use strict'

// had enabled by egg
// exports.static = true;
// 参数校验
// 通过 ctx.validate(rule, [body]) 直接对参数进行校验：
exports.validate = {
  enable: true,
  package: 'egg-validate',
}
// 静态资源处理
exports.static = {
  enable: true,
  package: 'egg-static',
}