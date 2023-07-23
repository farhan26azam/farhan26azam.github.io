import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./scrollbar.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
