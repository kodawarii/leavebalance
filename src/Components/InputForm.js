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

    /* Getting Today's date to default into forecast input field */
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substr(0,10);

    return (
      <div className="inputform">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ul>
                <li>
                    Join Date: <br/><br/>
                    <input type="date" onChange={this.handleJoinChange.bind(this)} className="inputField"/>
                </li>

                <li>
                    Leaves Used: <br/><br/>
                    <input type="text" maxlength="3" placeholder="From 0 to 999 (Days)" pattern="\d*" onChange={this.handleUsedChange.bind(this)} className="inputField"/>
                </li>

                <li>
                    Forecast Date: <br/><br/>
                    <input type="date" onChange={this.handleForecastChange.bind(this)} defaultValue={date} className="inputField"/>
                </li>
            </ul>
            
            <input id="submitButton" type="submit" value="Calculate Forecast" className="submitButton" />

          </form>
      </div>
    );
  }
}

export default InputForm;
