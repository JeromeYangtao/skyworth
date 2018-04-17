import React, { Component } from 'react'
import { Upload, Button, Icon } from 'antd'

class Join extends Component {
  render () {
    return (
      <div className="join">
        加入我们
        <MyUpload/>
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

export default Join