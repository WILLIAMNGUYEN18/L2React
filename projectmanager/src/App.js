import React, { Component } from 'react';
//import logo from './logo.svg';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){//directly changing state rather than pulling from database/api
    //top of application is usually state. pass it down through properties (immutable data)

    super()

    this.state = {
      projects: [
       //keep this empty and do it in component will/did mount
      ] 
    }
  }


  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Node Practice',
        category: 'Web Development'
      },
      {
        title: '373 Projects',
        category: 'Data Structures'
      },
      {
        title: 'CryptoCurrency Visualizations',
        category: 'Data Visualization'
      }
    ]});
  }

  handleAddProject(project){//adding new project to state of main component

    let projects = this.state.projects; //grabbing currentprojects
    
    projects.push(project); //adding newProject
    this.setState({projects:projects});
    //console.log(project);
  }

  render() {
    return (//what is returned from render
      //only 1 div at top level
      <div className="Project Manager App">
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
      
        
        <Projects projects = {this.state.projects}/>
        
      </div>
    );
  }
}

/* 

<Projects />
<Projects test = "Hello World"/>

<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p> 
*/
export default App;
