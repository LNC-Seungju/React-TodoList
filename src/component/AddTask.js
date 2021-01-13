import React from 'react';

const AddTask = ({todo, changeHandler, clickHandler}) => {
  return (
    <div>
      <form>
        <input value={todo} onChange={changeHandler}></input>
        <button onClick={clickHandler}>추가</button>
      </form>
    </div>
  )
}
export default AddTask;