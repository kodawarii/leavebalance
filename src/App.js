import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Container from './Components/Container';

const accrue = 5/12;
const oneDay = 24*60*60*1000;

class App extends Component {

  constructor(){
    super();

    this.state = {
      join: 0,
      used: 0,
      forecast: 0,

      leave: 0,
      balance: 0,
    }
  }

  calculate(){
    let today = new Date();
    let joinDate = this.state.join;
    let difference1 = Math.round(Math.abs((today.getTime() - joinDate.getTime())/(oneDay)));

    let forecastDay = this.state.forecast;
    let difference2 = Math.round(Math.abs((forecastDay.getTime() - today.getTime())/(oneDay)));

    let leaveBalance = difference1 * accrue - this.state.used * 7.5;
    let forecastBalance = difference2 * accrue + leaveBalance;
    
    this.state.leave = leaveBalance;
    this.state.balance = forecastBalance;
  }

  getUserInput(join, used, forecast){    
    this.state.join = new Date(join);
    this.state.used = used;
    this.state.forecast = new Date(forecast);

    this.calculate();
  }

  render() {

    return (
      <div className="App">

        <Container
        getUserInput = {this.getUserInput.bind(this)}
        leave = {this.state.leave}
        balance = {this.state.balance}
        />

      </div>
    );
  }
}

export default App;
