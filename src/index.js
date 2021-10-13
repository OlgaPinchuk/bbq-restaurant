// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import { MenuProvider } from "./state/MenuProvider";
import App from "./App";
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
