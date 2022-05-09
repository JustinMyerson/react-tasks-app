import React from "react";

import TodoList from "../../Components/TodoList/TodoList";

import "./Todos.css";

function Todos() {
  return (
    <div className="todos-div">
      <TodoList></TodoList>
    </div>
  );
}

export default Todos;
