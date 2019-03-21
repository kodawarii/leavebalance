import React, { Component } from 'react';

// Components
import InputForm from './InputForm';
import Output from './Output';

class Container extends Component {

  render() {
    return (
      <div>
       <InputForm
        getUserInput = {this.props.getUserInput.bind(this)}/
        >

        <br/>

        <Output
        leave = {this.props.leave}
        balance = {this.props.balance}
        />
      </div>
    );
  }
}

export default Container;
