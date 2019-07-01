import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store/index";
import Layout from "./Layout";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Layout />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
