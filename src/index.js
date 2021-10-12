// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import { CategoriesProvider } from "./state/CategoriesProvider";
import App from "./App";
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
