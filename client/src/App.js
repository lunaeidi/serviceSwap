import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/home'
import { Route, Switch } from 'react-router-dom'
import Signup from './Containers/signup'
import Login from './Containers/login'
import loggedinHome from './Containers/loggedInHome'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
           <Route exact path="/loggedinhome" component={loggedinHome}/>
           <Route exact path="/" component={Home}/>
           <Route exact path="/signup" component={Signup}/>
           <Route exact path="/login" component={Login}/>
 </Switch>
      </div>
    );
  }
}

export default App;
