import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BalanceReducer from "./Store/BalanceReducer";
import LoanReducer from "./Store/LoanReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(combineReducers({BalanceReducer, LoanReducer}),applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
