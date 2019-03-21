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
    
    this.setState({leave: leaveBalance});
    this.setState({balance: forecastBalance});

    //console.log("+++LEAVES: " + this.state.leave);
    //console.log("+++BALANCE: " + this.state.balance);
  }

  getUserInput(join, used, forecast){    
    this.state.join = new Date(join);
    this.state.used = used;
    this.state.forecast = new Date(forecast);

    this.calculate();
  }

  showOutput(){
    this.setState({showOutput: true});
  }

  render() {

    console.log("-----LEAVES: "+ this.state.leave);
    console.log("-----BALANCE: "+ this.state.balance);

    let output;
    if(this.state.showOutput){
        console.log("LEAVES: "+ this.state.leave);
        console.log("BALANCE: "+ this.state.balance);
        output = <Output
        leave = {this.state.leave}
        balance = {this.state.balance}
        />
    }

    return (
      <div className="App">

        <InputForm
        showOutput = {this.showOutput.bind(this)}
        getUserInput = {this.getUserInput.bind(this)}
        />

        <br/>

        {output}

      </div>
    );
  }
}

export default App;
