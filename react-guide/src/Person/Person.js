import React from 'react';


//const person = function(){} es5

const person = (props) => { //es6 format for component (component is function that returns jsx)
    return (
        <div>
            <p onClick = {props.click}>I'm {props.name} Component! I am  {props.age} years old! # {Math.floor(Math.random()*30)}</p>
            <p> {props.children}</p>
        </div>
    )//props.children refers to any elements between opening and closing tags of our component (<Person></Person>)

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