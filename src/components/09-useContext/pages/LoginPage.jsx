import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const loggedUser = {
    id: 0,
    name: "Jacinto Acosta",
    email: "jacintoaczz@gmail.com",
  };

  return (
    <>
      <main className="container">
        <h1>Login page</h1>
        <hr className="divider" />

        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setUser(loggedUser);
          }}
        >
          Login
        </button>

        <button
          className="btn btn-outline-danger mx-3"
          onClick={() => {
            setUser({});
          }}
        >
          Logout
        </button>
      </main>
    </>
  );
};
