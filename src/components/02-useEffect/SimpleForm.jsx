import React, { useEffect, useState } from "react";
import { Message } from "./Message";

import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  // Solo se ejecutara una sola vez, dado que el array de dependencias esta vacio.
  useEffect(() => {
    console.log("Hey!");
  }, []);

  useEffect(() => {}, [formState]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <main className="container">
      <h1>useEffect</h1>
      <hr className="divider" />

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

      {name === "123" && <Message />}
    </main>
  );
};
