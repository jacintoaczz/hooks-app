export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "[Todo] Add":
      return [...state, action.payload];

    case "[Todo] Delete":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
