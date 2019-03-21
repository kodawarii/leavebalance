import React, { Component } from 'react';

class Output extends Component {

  render() {
    return (
      <div>
        <p>Output: </p>
        <p> Leave Balance: {this.props.leave} </p>
        <br/>
        <p> Forecasted balance: {this.props.balance}</p>
      </div>
    );
  }
}

export default Output;
