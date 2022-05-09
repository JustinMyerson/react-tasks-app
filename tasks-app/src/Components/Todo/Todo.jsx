import React from "react";

import "./Todo.css";

function Todo({ id, title, isComplete }) {
  return (
    <div className="todo-div">
      <h3 className="h3-left">{title}</h3>
      <button>O</button>
      <button>X</button>
    </div>
  );
}

export default Todo;
