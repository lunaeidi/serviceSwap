import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/home'

import Signup from './Containers/signup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup/>
      </div>
    );
  }
}

export default App;
