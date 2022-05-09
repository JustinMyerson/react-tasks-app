import React, { useReducer, useState } from "react";

import NewTodoForm from "../NewTodoForm/NewTodoForm";

import Todo from "../Todo/Todo";

import { initialState, todoReducer } from "../../reducers/tools";

import "./TodoList.css";

function TodoList() {
  const [todosReducer, dispatch] = useReducer(todoReducer, initialState);

  const [isFormVisible, setFormVisible] = useState(false);

  function onDeleteTodo(id) {
    dispatch({ type: "deleteTodo", payload: id });
  }

  function onResetButtonClick() {
    dispatch({ type: "resetTodo" });
  }

  function onAddTodoCLick() {
    setFormVisible(!isFormVisible);
  }

  function onAddNewTodo(title) {
    console.log(title);
  }

  return (
    <div className="todo-list-div">
      <div className="to-do-buttons-div">
        <button className="reset-button" onClick={() => onResetButtonClick()}>
          Reset
        </button>
        <button className="add-task-button" onClick={() => onAddTodoCLick()}>
          Add Task
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
      {isFormVisible ? <NewTodoForm onAddNewTodo={onAddNewTodo} /> : null}
    </div>
  );
}

export default TodoList;
