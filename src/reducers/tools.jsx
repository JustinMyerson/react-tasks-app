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
    title: "Feed p",
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
      return state;
    default:
      console.log(action.type);
      console.log("teststststststs");
      return state;
  }
}
