import React, { Component } from 'react';
import App from './App';
import UserOutput from './UserOutput';

const UserInput = (props) => {
  const inputStyle = {
border: '2px solid green'
  };
  return <input 
  type= "text"
  style = {inputStyle}  
  onChange= {props.changed}
  value = {props.currentName}/>

}
export default UserInput;
/*
class UserInput extends Component {
  state = {
    username: "userinput name#1"
  }
  render() {
    return (

      <div>
        <p>          
          
        </p>

      </div>
    );
  }
}
*.
export default UserInput;
*/