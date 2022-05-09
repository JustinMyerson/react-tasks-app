import React from "react";

import { useReducer } from "react";
import Todo from "../Todo/Todo";

import { initialState, todoReducer } from "../../reducers/tools";

// const initialTodos = [
//   {
//     id: 0,
//     title: "Clean dishes",
//     isComplete: false,
//   },
//   {
//     id: 1,
//     title: "Take out trash",
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: "Feed pets",
//     isComplete: true,
//   },
// ];

function TodoList() {
  // const [todos, setTodos] = useState(() => initialTodos);

  const [todosReducer, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
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
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
