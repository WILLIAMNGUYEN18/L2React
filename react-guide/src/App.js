import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state =  {
    persons: [
      {name: 'Max', age: 28},
      {name:"Manu", age: "12"},
      {name:"Stephanie", age: "25"}
    ]
  }
  //state only available by classes that extend component


  switchNameHandler = (newName) => { //function for switch name button
    console.log('Was Clicked!');//Checking click whent through.
    // DON'T DO THISthis.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
      {name: 'aaaaa', age: 28},
      {name:newName, age: 12},
      {name:"Stephanie", age: 40}
      ]
    });
  } //more events here: https://reactjs.org/docs/events.html#supported-events

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 12},
      {name: 'Stephanie', age: 26}
      ]
    });
  }

  //rerender when state or properties change updates dom
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!!'); //h1 doesn't work, need to use another createElement call
    //return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!!')); //create element in another element (div wrapping h1)
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!')); //App css class being applied with className
    //above statement is equivalent to the statement below
    //alt format: <button onClick = {this.switchNameHandler.bind(this, 'namechange due to button')} > Switch Name </button>
    return (
      <div className="App">
        <h1>New React App</h1>
        <button 
        style = {style}
        onClick = {() =>this.switchNameHandler('namechange due to function format')} > Switch Name </button>

        <Person 
          name ={this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name ={this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'namechange due to text click')}
          changed = {this.nameChangeHandler}> My Hobbies: Racing </Person>
        <Person 
          name ={this.state.persons[2].name} 
          age = {this.state.persons[2].age}
          />
      </div>
      
    );
    
  }
}

export default App;
