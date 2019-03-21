import React, { Component } from 'react';

class Output extends Component {
   
    constructor(){
        super();
    
        this.state = {
          leave: 0,
          balance: 0,
        }
    }

    update(){
        this.forceUpdate();
        this.leave = this.props.leave;
        this.balance = this.props.balance;
        console.log("--Leaves: " + this.props.leave);
        console.log("--Balance: " + this.props.balance);
        console.log("++Leaves: " + this.state.leave);
        console.log("++Balance: " + this.state.balance);
    }

  render() {
    return (
      <div>
        <button onClick={this.update.bind(this)}> Show Results </button>
        <p>Output: </p>
        <p> Leave Balance: {this.state.leave} </p>
        <br/>
        <p> Forecasted balance: {this.state.balance}</p>
      </div>
    );
  }
}

export default Output;
