import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Join from './components/join'
import Management from './components/management'

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
            </ul>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/join" component={Join}/>
              <Route path="/management" component={Management}/>
            </Switch>
            <footer>footer</footer>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
