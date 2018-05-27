import React, { Component } from 'react'
import './home.scss'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      inputingTodo: '',
      todos: []
    }
  }

  addTodo (e) {
    e.preventDefault()
    let inputingTodo = this.state.inputingTodo
    if (inputingTodo) {
      this.state.todos.push(inputingTodo)
      this.setState({
        todos: this.state.todos,
        inputingTodo: ''
      })
    } else {
      alert('输入不能为空')
    }
  }

  changeInputingTodo (e) {
    this.setState({
      inputingTodo: e.target.value.trim()
    })
  }

  render () {
    return (
      <div className="home">
        <div className='todolist'>
          <form onSubmit={this.addTodo.bind(this)}>
            <input autoFocus={false} value={this.state.inputingTodo}
                   onChange={this.changeInputingTodo.bind(this)}
                   placeholder='输入非空TODO'
                   type="text"/>
            <button>addTodo</button>
          </form>
          <ul>
            {
              this.state.todos.map((todo, index) => {
                return (
                  <div key={index}>
                    <li>{todo} <a href="#">完成</a></li>
                  </div>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Home