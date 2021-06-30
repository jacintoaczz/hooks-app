// Ejemplos para entender los reducers
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "[Todo] Agregar") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();
const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

// Creamos una accion
const aggTodoAction = {
  type: "[Todo] Agregar",
  payload: newTodo,
};

todos = todoReducer(todos, aggTodoAction);
