import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Join from './components/Join'
import Management from './components/Management'
import Login from './components/Login'
import FooterBar from './components/FooterBar'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <div>
            <ul className="nav">
              <li><Link to="/">主页</Link></li>
              <li><Link to="/join">加入我们</Link></li>
              <li><Link to="/management">后台管理</Link></li>
              <li><Link to="/login">登录</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/join" component={Join}/>
              <Route path="/management" component={Management}/>
              <Route path="/login" component={Login}/>
            </Switch>
            <FooterBar/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
