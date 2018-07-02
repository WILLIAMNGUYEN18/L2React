import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!!'); //h1 doesn't work, need to use another createElement call
    //return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!!')); //create element in another element (div wrapping h1)
    
    
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!')); //App css class being applied with className
    //above statement is equivalent to the statement below
    
    return (
      <div className="App">
        <h1>New React App</h1>
      </div>
      
    );
    
  }
}

export default App;
