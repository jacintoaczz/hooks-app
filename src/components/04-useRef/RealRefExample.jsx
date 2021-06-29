import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealRefExample = () => {
  const [show, setShow] = useState(false);

  return (
    <main className="container">
      <h1>Real useRef example</h1>
      <hr className="divider" />

      {show && <MultipleCustomHooks />}

      <button
        className="btn btn-primary-mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </main>
  );
};
