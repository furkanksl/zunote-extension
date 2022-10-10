import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />

            <ToastContainer theme="colored" autoClose={2500} limit={1} />
        </BrowserRouter>
    </Provider>
);
