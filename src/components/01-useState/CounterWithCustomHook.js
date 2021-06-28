import React from "react";
import { useCounter } from "@hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <main className="container">
      <h1>Counter with custom hook: {state}</h1>
      <hr className="divider" />

      <button className="btn btn-primary mx-2" onClick={increment}>
        +1
      </button>

      <button className="btn btn-warning mx-2" onClick={reset}>
        Reset
      </button>

      <button className="btn btn-danger mx-2" onClick={decrement}>
        -1
      </button>
    </main>
  );
};
