import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./assets/main.scss";
import CardState from "./context/CardState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardState>
        <App />
      </CardState>
    </BrowserRouter>
  </React.StrictMode>
);
