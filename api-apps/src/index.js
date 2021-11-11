import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);

// For hot relaoding(automatic reloading of server)

if (module.hot) {
  module.hot.accept();
}
