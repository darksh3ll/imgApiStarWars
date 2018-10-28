import React, { Component } from 'react';
import './App.css';
import FetchApi from "./FetchApi";


class App extends Component {

  render() {
    return (
      <div className="App">
          <FetchApi/>
      </div>
    );
  }
}

export default App;
