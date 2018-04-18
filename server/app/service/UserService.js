const Service = require('egg').Service

class UserService extends Service {
  constructor (ctx) {
    super(ctx)
    this.session = ctx.session
    this.UserModel = ctx.model.UserModel
    this.ResponseCode = ctx.response.ResponseCode
    this.ServerResponse = ctx.response.ServerResponse
  }

  async register (user) {
    user = await this.UserModel.create(user, {
      attributes: {exclude: ['password']},
    })
    user = user.toJSON()
    // return this.ServerResponse.createBySuccessMsgAndData('注册成功', user)
    return user
  }

  async login (username, password) {
    // 检查密码是否正确
    const user = await this.UserModel.findOne({
      attributes: ['id', 'username'],
      where: {
        username,
        password
      },
    })
  }
}

module.exports = UserService