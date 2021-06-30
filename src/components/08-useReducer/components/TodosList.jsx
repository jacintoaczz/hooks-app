import React from "react";
import PropTypes from "prop-types";
import { TodoListItem } from "./TodoListItem";

export const TodosList = ({ todos, dispatch }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, idx) => {
        return (
          <TodoListItem
            todo={todo}
            idx={idx}
            dispatch={dispatch}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
