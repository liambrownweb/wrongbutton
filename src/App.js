import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './static/css/main.css';
import TitleScreen from './ui/TitleScreen.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
		<TitleScreen></TitleScreen>
      </div>
    );
  }
}

export default App;
