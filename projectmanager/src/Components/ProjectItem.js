import React, { Component } from 'react';
//import logo from './logo.svg';

class ProjectItem extends Component {
  render() {

    return (//what is returned from render
      //only 1 div at top level
        

      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
      </li>
    );
  }
}

/* 
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p> 
*/
export default ProjectItem;
