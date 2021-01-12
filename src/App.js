import React, { Component } from 'react';

class App extends Component {
  state = {
    todo: '',
    todos: [
      { task: 'react' },
      { task: 'angular' },
      { task: 'vue'}
    ]
  }
  typeHandler = (e) => {
    this.setState({
      todo: e.target.value 
    })
  }
  addHandler = (e) => {
    e.preventDefault();
    const todo = this.state.todo;
    const todos = this.state.todos;
    this.setState({
      todos : [...todos, todo],
      todo: ''
    })
  }
  render() {
    return (
      <div>
        <form>
          <input value={this.state.todo} onChange={this.typeHandler}></input>
          <button onClick={this.addHandler}>추가</button>
        </form>
        <div>
          <p>{this.state.todos[0].task}</p>
          <button>삭제</button>
        </div>
        <div>
          <p>{this.state.todos[1].task}</p>
          <button>삭제</button>
        </div>
        <div>
          <p>{this.state.todos[2].task}</p>
          <button>삭제</button>
        </div>
        <div>
          {this.state.todos.map(({task, id}) => 
          <div key={id}>
            <p>{task}</p> 
            <button>delete</button>
          </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;