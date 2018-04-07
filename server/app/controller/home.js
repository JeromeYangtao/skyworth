'use strict'
const fs = require('fs')
const path = require('path')

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    let {ctx} = this
    let htmlPath = path.resolve(process.cwd(), 'app/public/index.html')
    let html = fs.readFileSync(htmlPath)
    ctx.set('Content-Type', 'text/html')
    ctx.body = html
  }
}

module.exports = HomeController
