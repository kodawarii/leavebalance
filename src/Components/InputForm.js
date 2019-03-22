import React, { Component } from 'react';

// Stylesheets
import './Style_InputForm.css'

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
      <div className="inputform">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ul>
                <li>
                    Enter Join Date: <br/>
                    <input type="date" onChange={this.handleJoinChange.bind(this)} />
                </li>

                <li>
                    Enter Leaves Used: <br/>
                    <input type="text" ref="" onChange={this.handleUsedChange.bind(this)} />
                </li>

                <li>
                    Enter Forecast Date: <br/>
                    <input type="date" ref="" onChange={this.handleForecastChange.bind(this)} />
                </li>
            </ul>
            
            <input id="submitButton" type="submit" value="Calculate Forecast" className="submitButton" />

          </form>
      </div>
    );
  }
}

export default InputForm;
