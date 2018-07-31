import React, { Component } from 'react';
import './App.css';
import './UserOutput';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    username: "sample name #2"

  }

  //using 'this' keyword, follow this syntax for functions
  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  nameHandler = (newName) => {
    this.setState({
      username: newName
    });
  }
  handleClick = (newName) => {
    this.setState({
      username: newName
    });

  }
  //<button OnClick = {this.handleClick.bind(this, 'event name change #1')}> </button>
  //click = {this.nameHandler.bind(this, 'NAME CHANGE SAMPLE #1')}
  render() {
    return (
      <div className="App">

      
      <UserInput
        changed = {this.usernameChangedHandler}
        currentName = {this.state.username}
      />

      <UserOutput 
      username = {this.state.username}
      
      />
      <UserOutput 
      username = "name1"/>
      <UserOutput />


      </div>
    );
  }
}

/*
    Create TWO new components: UserInput and UserOutput
    UserInput should hold an input element, UserOutput two paragraphs
    Output multiple UserOutput components in the App component (any paragraph texts of your choice)
    Pass a username (of your choice) to UserOutput via props and display it there
    Add state to the App component (=> the username) and pass the username to the UserOutput component
    Add a method to manipulate the state (=> an event-handler method)
    Pass the event-handler method reference to the UserInput component and bind it to the input-change event

    Ensure that the new input entered by the user overwrites the old username passed to UserOutput
    
    Add two-way-binding to your input (in UserInput) to also display the starting username
    Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*/

export default App;
