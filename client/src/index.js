import React from 'react'
import ReactDOM from 'react-dom'
import 'reset.css'
import 'normalize.css'
import './styles/index.scss'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
