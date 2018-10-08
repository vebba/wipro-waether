import React, { Component } from "react";
import "./App.css";
import WeatherList from "./components/WeatherList";
import Header from "./components/Header";
import { Provider } from "react-redux";
import createStore from "./store";
import { REQUEST_API_DATA } from "./constants";

const store = createStore;

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <WeatherList />
        </div>
      </Provider>
    );
  }
}

store.dispatch({ type: REQUEST_API_DATA });

export default App;
