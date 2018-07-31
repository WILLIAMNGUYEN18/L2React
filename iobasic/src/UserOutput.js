import React, { Component } from 'react';
import App from './App';
import UserInput from './UserInput';
import './UserOutput.css'


const UserOutput = (props) => {
  return (
    <div className = "UserOutput">
      <p>
        Username: {props.username}
      </p>
      <p>
        paragraph 2
      </p>
    </div>
  );
};
export default UserOutput;
/*
class UserOutput extends Component {
  // NAME: {this.props.username}
  render() {
    
    return (
      <div>
      
        <p>
            
            paragraph 1

        </p>

        <p>
            OLDNAME?!:{this.props.username}
            paragraph 2
        </p>
      </div>
    );
  }
}
export default UserOutput;
*/