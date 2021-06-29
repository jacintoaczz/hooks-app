import React, { useRef } from "react";

export const FocusScreen = () => {
  // Cuando se usa con el atributo 'ref' en un elemento funciona de manera similar a un
  // @ViewChild de Angular, obteniendo acceso a una referencia del elemento seleccionado.
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <main className="container">
      <h1>Focus screen</h1>
      <hr className="divider" />

      <input
        ref={inputRef}
        type="text"
        className="form-control mb-5"
        placeholder="Su nombre"
      />

      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </main>
  );
};
