import React, { Component } from 'react'
import { Upload, Button, Icon } from 'antd'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">主页</Link></li>
              <li><Link to="/join">加入我们</Link></li>
              <li><Link to="/management">后台管理</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/management" component={Management}/>
            </Switch>
          </div>
        </Router>
        <main>
          <MyUpload/>
        </main>
        <footer>footer</footer>
      </div>
    )
  }
}

class Home extends Component {
  render () {
    return (
      <div className="Home">
        主页
      </div>
    )
  }
}

class Management extends Component {
  render () {
    return (
      <div className="Management">
        Management
      </div>
    )
  }
}

class MyUpload extends Component {
  state = {
    fileList: [
      // {
      //   uid: -1,
      //   name: 'xxx.png',
      //   status: 'done',
      //   url: 'http://www.baidu.com/xxx.png',
      // }
    ],
  }

  handleChange = (info) => {
    let fileList = info.fileList
    fileList = fileList.slice(-2)
    fileList = fileList.map((file) => {
      if (file.response) {
        file.url = file.response.url
      }
      return file
    })
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success'
      }
      return true
    })
    this.setState({fileList})
  }

  render () {
    let allCookies = {}
    document.cookie.split('&').forEach((str) => {
      let arr = str.split('=')
      allCookies[arr[0]] = arr[1]
    })

    const props = {
      action: '//localhost:7002/upload',
      onChange: this.handleChange,
      multiple: true,
      headers: {
        'x-csrf-token': allCookies.csrfToken
      }
    }
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button>
          <Icon type="upload"/> 上传简历
        </Button>
      </Upload>
    )
  }
}

export default App
