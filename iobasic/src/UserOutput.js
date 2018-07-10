import React, { Component } from 'react';
import App from './App';
import UserInput from './UserInput';

class UserOutput extends Component {
  render() {
    return (
      <div>
      
        <p>
          NAME: {this.props.username}
            paragraph 1

        </p>

        <p>
            paragraph 2
        </p>
      </div>
    );
  }
}
export default UserOutput;