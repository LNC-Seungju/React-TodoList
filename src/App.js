import React, { Component } from 'react';

class App extends Component {
  state = {
    todo: '',
    todos: [
      { task: 'react' },
      { task: 'angular' },
      { task: 'vue' }
    ]
  }
  typeHandler = (e) => {
    this.setState({
      todo: e.target.value 
    })
  }
  addHandler = (e) => {
    e.preventDefault();
    const todo = {task: this.state.todo}
    this.setState({
      todos: [...this.state.todos, todo],
      todo: '',
    })
  }
  deleteHandler = (idx) => {
    const filtered = this.state.todos.filter((todos, i) => i!==idx)
    this.setState({
      todos: filtered
    })
  }
  render() {
    const taskDisplay = this.state.todos.map((todo, id) => {
      return (
        <div key={id}>
          <p>{todo.task}</p> 
          <button onClick={() => this.deleteHandler(id)}>delete</button>
        </div>
      )
    })
    return (
      <div>
        <form>
          <input value={this.state.todo} onChange={this.typeHandler}></input>
          <button onClick={this.addHandler}>추가</button>
        </form>
        <div>
          { taskDisplay }
        </div>
      </div>
    );
  }
}
export default App;