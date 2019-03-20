import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import InputForm from './Components/InputForm';
import Output from './Components/Output';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm />
        <Output />
      </div>
    );
  }
}

export default App;
