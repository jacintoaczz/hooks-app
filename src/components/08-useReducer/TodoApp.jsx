import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import { Navbar } from "../Navbar";

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

  const handleDelete = (todoId) => {
    const action = {
      type: types.deleteTodo,
      payload: todoId,
    };

    dispatch(action);
  };

  return (
    <>
      <Navbar title={"Todo List"} />

      <main className="container">
        <h2>Total to-dos: ({todos.length})</h2>

        <div className="grid-layout">
          <div className="todos">
            <ul className="list-group list-group-flush">
              {todos.map((todo, idx) => {
                return (
                  <li key={todo.id} className="list-group-item">
                    <p className="text-center">
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
          </div>

          <div className="add-todo">
            <h4>Agregar to-do</h4>
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
