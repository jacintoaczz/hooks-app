import React from "react";
import PropTypes from "prop-types";
import { types } from "../types";

export const TodosList = ({ todos, dispatch }) => {
  const handleDelete = (todoId) => {
    const action = {
      type: types.deleteTodo,
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: types.toggleTodo,
      payload: todoId,
    };

    dispatch(action);
  };

  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, idx) => {
        return (
          <li key={todo.id} className="list-group-item">
            <p
              className={`${todo.done && "completed"}`}
              onClick={() => {
                handleToggle(todo.id);
              }}
            >
              {idx + 1}. {todo.desc}
            </p>

            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              Borrar
            </button>
          </li>
        );
      })}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
