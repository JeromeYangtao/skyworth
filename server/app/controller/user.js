'use strict'
const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller
const awaitWriteStream = require('await-stream-ready').write
const sendToWormhole = require('stream-wormhole')

let users = []

class UserController extends Controller {
  async info () {
    const {ctx} = this
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    }
  }

  async login () {
    const {ctx} = this
    const {username, password} = ctx.request.body
    ctx.session.user = {username,password}
    // users.forEach((user) => {
    //   if (user.username === username && user.password === password) {
    //     ctx.session.user = user
    //   }
    // })
    // 设置 Session
    ctx.body =  ctx.session.user
  }

  async upload () {
    console.log(this.ctx.session)
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