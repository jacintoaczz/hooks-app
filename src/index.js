import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm.jsx";
import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook.jsx";

ReactDOM.render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
