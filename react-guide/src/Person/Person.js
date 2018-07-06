import React from 'react';
import './Person.css';


//const person = function(){} es5

const person = (props) => { //es6 format for component (component is function that returns jsx)
    return (
        <div className = "Person">
            <p onClick = {props.click}>I'm {props.name} Component! I am  {props.age} years old! # {Math.floor(Math.random()*30)}</p>
            <p> {props.children}</p>
            <input type = "text" onChange = {props.changed} value = {props.name}/>
        </div>
    )//props.children refers to any elements between opening and closing tags of our component (<Person></Person>)
//2 way binding with onchange, namechangehanderl in app, and value being returned
//false error with onchange and value
}

export default person;
/*
class Person extends Component {
  render() {

    return (
      <div className="App">
        <h1>New React App</h1>
      </div>
      
    );
    
  }
}

export default Person;
*/