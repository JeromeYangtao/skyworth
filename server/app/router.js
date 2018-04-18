'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app
  router.get('/', controller.home.index)
  router.get('/user/:id', controller.user.info)
  router.post('/upload', controller.user.upload)
  router.post('/register', controller.user.register)
  router.post('/login', controller.user.login)
}
