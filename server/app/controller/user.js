'use strict'
const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller
const awaitWriteStream = require('await-stream-ready').write
const sendToWormhole = require('stream-wormhole')

class UserController extends Controller {
  async info () {
    const {ctx} = this
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    }
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