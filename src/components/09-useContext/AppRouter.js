import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "../Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar title="useContext" />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};
