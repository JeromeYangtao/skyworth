'use strict'
const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller
const awaitWriteStream = require('await-stream-ready').write
const sendToWormhole = require('stream-wormhole')

class UserController extends Controller {
  constructor (ctx) {
    super(ctx)
    this.session = ctx.session
    this.UserModel = ctx.model.UserModel
    this.UserService = ctx.service.userService
    this.ResponseCode = ctx.response.ResponseCode
    this.ServerResponse = ctx.response.ServerResponse
  }

  async info () {
    const {ctx} = this
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    }
  }

  async register () {
    const user = this.ctx.request.body
    const respponse = await this.UserService.register(user)
    this.ctx.body = respponse
  }

  async login () {
    const {ctx} = this
    const {username, password} = ctx.request.body
    ctx.session.user = {username, password}
    ctx.body = ctx.session.user
  }

  async upload () {
    const parts = this.ctx.multipart({autoFields: true})
    const files = []

    let stream
    while ((stream = await parts()) != null) {
      const filename = stream.filename.toLowerCase()
      const target = path.join(this.config.baseDir, 'app/upload', filename)
      const writeStream = fs.createWriteStream(target)
      try {
        await awaitWriteStream(stream.pipe(writeStream))
      } catch (err) {
        await sendToWormhole(stream)
        throw err
      }
      files.push(filename)
      this.ctx.body = {
        status: true
      }
    }
  }
}

module.exports = UserController