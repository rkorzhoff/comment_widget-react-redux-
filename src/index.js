import React, {Component} from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./containers/app.js";
import "./styles/main.css";
import store from "./store";
// export const initialState = [
//   {
//     comments: [],
//   },
// ];

// const store = createStore(comments);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
