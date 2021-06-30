import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import { Navbar } from "../Navbar";
import { TodosList } from "./components/TodosList";

import { types } from "./types";
import "./todo-app.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, resetValues] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: types.addTodo,
      payload: newTodo,
    };
    dispatch(action);
    resetValues();
  };

  return (
    <>
      <Navbar title={"Todo List"} />

      <main className="container">
        <h2>Total to-dos: ({todos.length})</h2>

        <div className="grid-layout">
          <div className="todos">
            <TodosList todos={todos} dispatch={dispatch} />
          </div>

          <div className="add-todo">
            <h4>Add to-do</h4>
            <hr className="divider" />

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="description"
                placeholder="Learn..."
                autoComplete="off"
                className="form-control"
                onChange={handleInputChange}
                value={description}
              />

              <div className="d-grid mt-2">
                <button className="btn btn-outline-primary" type="submit">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
