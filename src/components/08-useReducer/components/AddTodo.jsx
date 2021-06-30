import React from "react";
import { useForm } from "../../../hooks/useForm";

export const AddTodo = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, resetValues] = useForm({
    description: "",
  });

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

    handleAddTodo(newTodo);
    resetValues();
  };

  return (
    <>
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
    </>
  );
};
