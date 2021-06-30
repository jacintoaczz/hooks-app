import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <main className="container">
        <h1>Main Page</h1>
        <hr className="divider" />

        <pre>{JSON.stringify(user, null, 3)}</pre>
      </main>
    </>
  );
};
