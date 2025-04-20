// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";

// importa primeiro o CSS global (reset, variáveis, animações)
import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
