import React from 'react';

const DisplayTask = ({todos, deleteHandler}) => {
  return (
    todos.map((todo) => {
      return (
        <div key={todo.id}>
          <p>{todo.task}</p> 
          <button onClick={() => deleteHandler(todo.id)}>delete</button>
        </div>
      )
    })
  )
}

export default DisplayTask;