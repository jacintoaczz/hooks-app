import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./layout.css";

export const Layout = () => {
  const { count, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${count}`
  );
  const { author, quote } = !!data && data[0];
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <main className="container">
      <h1>Breaking Bad Quotes (layoutEffect)</h1>
      <hr className="divider" />

      <blockquote className="blockquote text-right">
        <p ref={pTag}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <pre className="mt-3"> {JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-outline-primary" onClick={increment}>
        Next quote
      </button>
    </main>
  );
};
