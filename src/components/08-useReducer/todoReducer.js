import { types } from "./types";

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.addTodo:
            return [...state, action.payload];

        case types.deleteTodo:
            return state.filter((todo) => todo.id !== action.payload);

        default:
            return state;
    }
};
