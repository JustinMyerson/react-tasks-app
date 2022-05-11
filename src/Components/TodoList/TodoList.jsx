import React, { useReducer, useState } from "react";

import NewTodoForm from "../NewTodoForm/NewTodoForm";

import Todo from "../Todo/Todo";

import { initialState, todoReducer } from "../../reducers/tools";

import { FaPlus, FaRedoAlt } from "react-icons/fa";

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

  function onAddNewTodo(title, color, icon) {
    dispatch({ type: "addTodo", payload: { title, color, icon } });
    setFormVisible(!isFormVisible);
  }

  function onCancelSubmit() {
    setFormVisible(!isFormVisible);
  }

  function toggleTaskCompleted(id) {
    dispatch({ type: "toggleCompleted", payload: id });
  }

  return (
    <div className="todo-list-div">
      <div className="to-do-buttons-div">
        <button className="reset-button" onClick={() => onResetButtonClick()}>
          <FaRedoAlt />
        </button>
        <button className="add-task-button" onClick={() => onAddTodoCLick()}>
          <FaPlus />
        </button>
      </div>
      <div className="still-todo-div">
        <h2>TO DO</h2>
        <div className="render-to-do">
          {todosReducer
            .filter((todos) => todos.isComplete !== true)
            .map((todo) => (
              <Todo
                id={todo.id}
                title={todo.title}
                color={todo.color}
                isComplete={todo.isComplete}
                icon={todo.icon}
                onDeleteTodo={onDeleteTodo}
                toggleTaskCompleted={toggleTaskCompleted}
              />
            ))}
        </div>
      </div>
      <div className="completed">
        <h2>COMPLETED</h2>
        <div className="render-done">
          {todosReducer
            .filter((todos) => todos.isComplete === true)
            .map((todo) => (
              <Todo
                id={todo.id}
                title={todo.title}
                color={todo.color}
                icon={todo.icon}
                isComplete={todo.isComplete}
                onDeleteTodo={onDeleteTodo}
                toggleTaskCompleted={toggleTaskCompleted}
              />
            ))}
        </div>
      </div>
      {isFormVisible ? (
        <NewTodoForm
          onAddNewTodo={onAddNewTodo}
          onCancelSubmit={onCancelSubmit}
        />
      ) : null}
    </div>
  );
}

export default TodoList;
