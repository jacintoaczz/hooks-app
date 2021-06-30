import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

import { Navbar } from "../Navbar";
import { TodosList } from "./components/TodosList";
import { AddTodo } from "./components/AddTodo";

import { types } from "./types";
import "./todo-app.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: types.addTodo,
      payload: newTodo,
    });
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
            <AddTodo handleAddTodo={handleAddTodo} />
          </div>
        </div>
      </main>
    </>
  );
};
