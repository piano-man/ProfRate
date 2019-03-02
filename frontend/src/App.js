import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './App.css';
import Search from './Search'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Search/>
      </BrowserRouter>
    );
  }
}

export default App;
