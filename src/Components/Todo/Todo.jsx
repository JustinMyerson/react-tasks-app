import React from "react";

import "./Todo.css";

import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";

function Todo({ id, title, color, icon, onDeleteTodo, toggleTaskCompleted }) {
  function onDeleteClick(id) {
    onDeleteTodo(id);
  }

  function onToggleClick(id) {
    toggleTaskCompleted(id);
  }

  return (
    <div className="todo-div" style={{ backgroundColor: color }}>
      <div className="heading">
        <h3 className="h3-left">{title}</h3>
      </div>
      <div className="buttons">
        <button className="button-o" onClick={() => onToggleClick(id)}>
          <MdOutlineDoneOutline />
        </button>
        <button className="button-x" onClick={() => onDeleteClick(id)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Todo;
