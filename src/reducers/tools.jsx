export const initialState = [
  {
    id: 0,
    title: "Clean dishes",
    color: "#5aa480",
    isComplete: false,
    icon: "GiWashingMachine",
  },
  {
    id: 1,
    title: "Take out trash",
    color: "#5aa480",
    isComplete: false,
    icon: "BsFillTrashFill",
  },
  {
    id: 2,
    title: "Feed the dogs",
    color: "#5aa480",
    isComplete: true,
    icon: "FaDog",
  },
];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "addTodo":
      const newTodos = [...state];
      const newId = Math.floor(Math.random() * 9999999);
      newTodos.push({
        id: newId,
        title: action.payload.title,
        color: action.payload.color,
        isComplete: false,
        icon: action.payload.icon,
      });
      return newTodos;
    case "deleteTodo":
      const updatedTodos = state.filter((todo) => todo.id !== action.payload);
      return updatedTodos;
    case "resetTodo":
      return initialState;
    case "toggleCompleted":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    default:
      return state;
  }
}
