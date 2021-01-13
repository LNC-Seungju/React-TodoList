import React, { Component } from 'react';
import AddTask from './component/AddTask';
import DisplayTask from './component/DisplayTask';
import { firestore }  from './firebase';

class App extends Component {
  state = {
    todo: '',
    todos: []
  }
  componentDidMount() {
    const todos = [...this.state.todos]
    firestore.collection('tasks').get()
      .then((docs)=>{
        docs.forEach((doc) => {
          console.log(doc.data().task+'  '+doc.id)
          todos.push({task: doc.data().task, id: doc.id})
        })
        this.setState({
          todos : todos
        })
      })
  }
  typeHandler = (e) => {
    this.setState({
      todo: e.target.value 
    })
  }
  addHandler = (e) => {
    e.preventDefault();
    firestore.collection('tasks').add({ task: this.state.todo })
      .then((res)=>{
        const todos = [...this.state.todos, { task: this.state.todo, id: res.id}]
        this.setState({
          todos : todos,
          todo: ''
        })
      })
  }
  deleteHandler = (id) => {
    // const filtered = this.state.todos.filter((todos, i) => i!==idx)
    // this.setState({
    //   todos: filtered
    // })
    firestore.collection('tasks').doc(id).delete()
      .then(()=> {
        const todos = this.state.todos.filter((todo) => todo.id !== id )
        this.setState({ todos: todos })
      })
  }
  render() {
    return ( 
      <>
        <AddTask todo={this.state.todo} changeHandler={this.typeHandler} clickHandler={this.addHandler}
        />
        <DisplayTask todos={this.state.todos} deleteHandler={this.deleteHandler} />
      </>
    );
  }
}

export default App;