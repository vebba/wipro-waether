import React, { Component } from 'react';
import './App.css';
import WeatherList from './components/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WeatherList />
        </header>
      </div>
    );
  }
}

export default App;
