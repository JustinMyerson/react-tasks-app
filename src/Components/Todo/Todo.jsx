import React from "react";

import "./Todo.css";

function Todo({ id, title, isComplete }) {
  return (
    <div className="todo-div">
      <div className="heading">
        <h3 className="h3-left">{title}</h3>
      </div>
      <div className="buttons">
        <button className="button-o">O</button>
        <button className="button-x">X</button>
      </div>
    </div>
  );
}

export default Todo;
