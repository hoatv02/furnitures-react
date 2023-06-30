import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/Redux/store";
import ToastMessage from "./component/Site/ToastMessage/ToastMessage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastMessage />
        <App />

      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
