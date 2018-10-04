import React, { Component } from 'react';
import './App.css';
import WeatherList from './components/WeatherList';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <WeatherList />

      </div>
    );
  }
}

export default App;
