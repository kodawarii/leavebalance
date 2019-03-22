import React, { Component } from 'react';

// Stylesheets
import './Style_Output.css'

class Output extends Component {

  render() {
    return (
      <div>
        <table className="outputTable">
            <tbody>

                <tr>
                    <td>    
                    </td>
                    <td>
                        Hours    
                    </td>
                    <td>    
                        Days
                    </td>
                </tr>

                <tr>
                    <td>
                        Leave Balance
                    </td>
                    <td>
                        {this.props.leave}
                    </td>
                    <td>
                        {(this.props.leave / 7.5).toFixed(2)}
                    </td>
                </tr>

                <tr>
                    <td>
                        Forecasted Balance
                    </td>
                    <td>
                        {this.props.balance}
                    </td>
                    <td>
                        {(this.props.balance / 7.5).toFixed(2)}
                    </td>
                </tr>

            </tbody>
        </table>
      </div>
    );
  }
}

export default Output;
