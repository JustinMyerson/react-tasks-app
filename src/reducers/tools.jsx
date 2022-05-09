export const initialState = [
  {
    id: 0,
    title: "Clean dishes",
    isComplete: false,
  },
  {
    id: 1,
    title: "Take out trash",
    isComplete: false,
  },
  {
    id: 2,
    title: "Feed the dogs",
    isComplete: true,
  },
];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "addTodo":
      const newTodos = [...state];
      const newId = Math.floor(Math.random() * 9999999);
      newTodos.push({ id: newId, title: action.payload, isComplete: false });
      console.log(action.type);
      return newTodos;
    case "deleteTodo":
      console.log(action.type);
      const updatedTodos = state.filter((todo) => todo.id !== action.payload);
      return updatedTodos;
    case "resetTodo":
      console.log(action.type);
      return initialState;
    default:
      console.log(action.type);
      return state;
  }
}
