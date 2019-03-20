import React, { Component } from 'react';

// Components
import Input1Join from './Input1Join';
import Input2Used from './Input2Used';
import Input3Forecast from './Input3Forecast';

class InputForm extends Component {
  render() {
    return (
      <div>
        <Input1Join/>
        <Input2Used/>
        <Input3Forecast/>
      </div>
    );
  }
}

export default InputForm;
