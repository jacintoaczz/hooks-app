import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ title = "Hooks App" }) => {
  return (
    <header>
      <nav className="navbar navbar-light mb-3 navbar-expand-md">
        <div className="container">
          <span className="navbar-brand text-white">{title}</span>

          {/* Collapse del navbar */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="./">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* #Collapse del navbar */}
        </div>
      </nav>
    </header>
  );
};
