import { types } from "./types";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case types.addTodo:
      return [...state, action.payload];

    case types.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload);

    case types.toggleTodo:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    // case types.toggleTodo:
    //   return state.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return { ...todo, done: !todo.done };
    //     }
    //     return todo;
    //   });

    default:
      return state;
  }
};
