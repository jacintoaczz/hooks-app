import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { count, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${count}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <main className="container">
      <h1>Breaking Bad Quotes</h1>
      <hr className="divider" />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-outline-primary" onClick={increment}>
        Next quote
      </button>
    </main>
  );
};
