import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import Reducer from './reducers';
// import './fontIcon/index.css';
import Layout from "./Layout";

export default class App extends Component {
  render() {
    return (
      // <Provider {...stores}>
      <BrowserRouter>
        <div className="App">
          <Layout />
        </div>
      </BrowserRouter>
      // </Provider>
    );
  }
}
