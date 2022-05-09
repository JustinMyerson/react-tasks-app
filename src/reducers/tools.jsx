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
      console.log(action.type);
      return state;
    case "deleteTodo":
      console.log(action.type);
      const newTodos = state.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case "resetTodo":
      console.log(action.type);
      return initialState;
    default:
      console.log(action.type);
      return state;
  }
}
