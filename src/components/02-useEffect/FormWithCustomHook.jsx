import React from "react";
import { useForm } from "../../hooks/useForm";

import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    console.log(formValues);
  };

  return (
    <main className="container">
      <h1>Form with custom hook</h1>
      <hr className="divider" />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control mb-2"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder="email@email.com"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control mb-2"
            placeholder="******"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </main>
  );
};
