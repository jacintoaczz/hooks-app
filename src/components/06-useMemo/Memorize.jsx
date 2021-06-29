import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { count, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <main className="container">
      <h1>
        Counter: <Small value={count} />
      </h1>

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
