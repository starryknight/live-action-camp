import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
