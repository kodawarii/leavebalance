import React, { Component } from 'react';

class InputForm extends Component {

    constructor(){
        super();

        this.state = {
            join: 0,
            used: 0,
            forecast: 0,
        }
    }

    handleJoinChange(e){
        this.state.join = e.target.value;
    }

    handleUsedChange(e){
        this.state.used = e.target.value;
    }

    handleForecastChange(e){
        this.state.forecast = e.target.value;
    }

    handleSubmit(e){
        e.preventDefault();

        console.log("Fuck this shit");
        console.log(this.state);

        this.props.getUserInput(this.state.join, this.state.used, this.state.forecast);
        this.props.showOutput();
    }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <p>Enter Join Date:</p>
            <input type="date" onChange={this.handleJoinChange.bind(this)} />

            <p>Enter Leaves Used:</p>
            <input type="text" ref="" onChange={this.handleUsedChange.bind(this)} />

            <p>Enter Forecast Date:</p> 
            <input type="date" ref="" onChange={this.handleForecastChange.bind(this)} />

            <br/><br/>
            <input id="submitButton" type="submit" value="Calculate Forecast" className="submitButton" />         
          </form>
      </div>
    );
  }
}

export default InputForm;
