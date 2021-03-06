import React, { Component } from 'react';
import './App.css';
import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Unit Tests</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <br/><br/>
            <CheckboxWithLabel labelOn={"On"} labelOff={"Off"}/>
        </p>
      </div>
    );
  }
}

export default App;
