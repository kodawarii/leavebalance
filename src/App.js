import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
// Components
import InputForm from './Components/InputForm';
import Output from './Components/Output';

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

      showOutput: false,
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

    leaveBalance = leaveBalance.toFixed(2);
    forecastBalance = forecastBalance.toFixed(2);
    
    this.setState({leave: leaveBalance});
    this.setState({balance: forecastBalance});

    console.log("+++LEAVES: " + this.state.leave);
    console.log("+++BALANCE: " + this.state.balance);
  }

  getUserInput(join, used, forecast, isToday){    
    if(isToday){
      this.state.forecast = forecast;
    }
    else{
      this.state.forecast = new Date(forecast);
    }
    this.state.join = new Date(join);
    this.state.used = used;

    this.calculate();
  }

  showOutput(){
    this.setState({showOutput: true});
  }

  render() {

    return (
      <div className="App">
        <header>
          <link href="https://fonts.googleapis.com/css?family=Gruppo" rel="stylesheet"/>
          <b> eHR Annual Leaves Forecaster </b>
        </header>

        <br/><br/>

        <InputForm
        showOutput = {this.showOutput.bind(this)}
        getUserInput = {this.getUserInput.bind(this)}
        />

        <br/>
        <br/>

        <Output
        leave = {this.state.leave}
        balance = {this.state.balance}
        />

        <br/>

        <footer>
          Note: 2018 Forced Leaves was 6 days
        </footer>

      </div>
    );
  }
}

export default App;
