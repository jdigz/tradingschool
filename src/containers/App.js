import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';
import 'typeface-roboto'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 1
    }   
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App;
