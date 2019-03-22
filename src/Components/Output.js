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
                        0
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
                        0
                    </td>
                </tr>
                
            </tbody>
        </table>
      </div>
    );
  }
}

export default Output;
