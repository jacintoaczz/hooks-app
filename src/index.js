import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm.jsx";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook.jsx";
// import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks.jsx";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import { RealRefExample } from "./components/04-useRef/RealRefExample";
// import { Layout } from "./components/05-useLayoutEffect/Layout";
// import { Memorize } from "./components/06-useMemo/Memorize";
import { CallbackHook } from "./components/06-useMemo/CallbackHook";

ReactDOM.render(
  <React.StrictMode>
    <CallbackHook />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
