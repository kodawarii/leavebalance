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

            isToday: true,
        }
    }

    setG10Date(){
        this.setState({join: "16/07/2018"});
    }

    handleJoinChange(e){
        this.state.join = e.target.value;
    }

    handleUsedChange(e){
        this.state.used = e.target.value;
    }

    handleForecastChange(e){
        this.state.isToday = false;
        this.state.forecast = e.target.value;
    }

    handleSubmit(e){
        e.preventDefault();

        console.log("Fuck this shit");
        console.log(this.state);

        if(this.state.isToday){
            let today = new Date();
            this.props.getUserInput(this.state.join, this.state.used, today, true);
            this.props.showOutput();
        }
        else{
            this.props.getUserInput(this.state.join, this.state.used, this.state.forecast, false);
            this.props.showOutput();
        }
    }

  render() {

    /* Getting Today's date to default into forecast input field */
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substr(0,10);

    return (
      <div className="inputform">
          <form onSubmit={this.handleSubmit.bind(this)}>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>
                                    Join Date: <br/><br/>
                                    <input type="date" onChange={this.handleJoinChange.bind(this)} className="inputField"/> <br/><br/>
                                    <div className="gradButtonContainer">
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G1 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G2 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G3 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G4 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G5 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G6 </span></span>
                                    </div>
                                    <div className="gradButtonContainer">
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G7 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G8 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G9 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton" onClick={this.setG10Date.bind(this)}> G10 </span></span>
                                        <span className = "gradButtonWrapper"><span className= "gradButton"> G11 </span></span>
                                    </div>
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
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <input id="submitButton" type="submit" value="Go!" className="submitButton" /> 
                        </td>
                    </tr>
                </tbody>
            </table>

          </form>
      </div>
    );
  }
}

export default InputForm;
