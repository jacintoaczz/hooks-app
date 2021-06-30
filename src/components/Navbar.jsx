import React from "react";

export const Navbar = ({ title = "Hooks App" }) => {
  return (
    <header>
      <nav className="navbar navbar-light mb-3">
        <div className="container">
          <span className="navbar-brand mb-0 h1 text-white">{title}</span>
        </div>
      </nav>
    </header>
  );
};
