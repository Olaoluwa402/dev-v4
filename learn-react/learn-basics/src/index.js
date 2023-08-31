import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "./context";
import { blogData } from "./components/data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={{ blogData }}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
