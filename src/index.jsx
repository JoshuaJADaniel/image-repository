import React from "react";
import ReactDOM from "react-dom";
import App from "App";

import "styles/main.css";
import material from "styles/material";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={material}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
