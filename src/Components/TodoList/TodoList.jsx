import React from "react";

import { useReducer } from "react";
import Todo from "../Todo/Todo";

import { initialState, todoReducer } from "../../reducers/tools";

import "./TodoList.css";

function TodoList() {
  const [todosReducer, dispatch] = useReducer(todoReducer, initialState);

  function onDeleteTodo(id) {
    dispatch({ type: "deleteTodo", payload: id });
  }

  function onResetButtonClick() {
    dispatch({ type: "resetTodo" });
  }

  return (
    <div>
      <div className="to-do-buttons-div">
        <button className="reset-button" onClick={() => onResetButtonClick()}>
          Reset
        </button>
      </div>
      <div className="still-todo-div">
        <h2>To Do</h2>
        <div className="render-to-do">
          {todosReducer
            .filter((todos) => todos.isComplete !== true)
            .map((todo) => (
              <Todo
                id={todo.id}
                title={todo.title}
                isComplete={todo.isComplete}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
        </div>
      </div>
      <div className="completed">
        <h2>Completed</h2>
        <div className="render-done">
          {todosReducer
            .filter((todos) => todos.isComplete === true)
            .map((todo) => (
              <Todo
                id={todo.id}
                title={todo.title}
                isComplete={todo.isComplete}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
