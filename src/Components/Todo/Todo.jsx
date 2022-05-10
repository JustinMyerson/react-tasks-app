import React from "react";

import "./Todo.css";

function Todo({
  id,
  title,
  color,
  isComplete,
  onDeleteTodo,
  toggleTaskCompleted,
}) {
  function onDeleteClick(id) {
    onDeleteTodo(id);
  }

  function onToggleClick(id) {
    toggleTaskCompleted(id);
  }

  console.log(color, "color");

  return (
    <div className="todo-div" style={{ backgroundColor: color }}>
      <div className="heading">
        <h3 className="h3-left">{title}</h3>
      </div>
      <div className="buttons">
        <button className="button-o" onClick={() => onToggleClick(id)}>
          O
        </button>
        <button className="button-x" onClick={() => onDeleteClick(id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Todo;
