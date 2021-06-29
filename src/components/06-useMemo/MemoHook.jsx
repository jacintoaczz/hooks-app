import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../services/procesoPesado";

export const MemoHook = () => {
  const { count, increment } = useCounter(50);
  const [show, setShow] = useState(true);
  // El useMemo acepta un callback que se ejecutara solo cuando las dependencias especificadas
  // en el array cambien, similar al useEffect.
  const memoProcesoPesado = useMemo(() => procesoPesado(count), [count]);

  return (
    <main className="container">
      <h1>useMemo</h1>
      <hr className="divider" />

      <h3>
        Counter: <small>{count}</small>
      </h3>

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary mx-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </main>
  );
};
