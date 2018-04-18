import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange (e) {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  async handleSubmit () {
    let data = {
      username: this.state.username,
      password: this.state.password,
    }
    await axios.post('http://localhost:7002/login', data)
    console.log('登录')
  }

  render () {
    return (
      <div>
        <div>
          <label>登录名：</label>
          <input type="text" value={this.state.username} placeholder="手机号码" name="username"
                 onChange={this.handleChange.bind(this)}/>
        </div>
        <div>
          <label>密&nbsp;&nbsp;&nbsp;码：</label>
          <input type="text" value={this.state.password} placeholder="密码" name="password"
                 onChange={this.handleChange.bind(this)}/>
        </div>
        <div>
          <input type="submit" value="提交" onClick={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Login