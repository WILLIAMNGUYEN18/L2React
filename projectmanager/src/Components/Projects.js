import React, { Component } from 'react';
//import logo from './logo.svg';
import ProjectItem from './ProjectItem';

class Projects extends Component {


  render() {

    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map(project =>   {
          //console.log(project);
          return(
              <ProjectItem key = {project.title} project = {project}/>
          );
        });
    }

    return (//what is returned from render
      //only 1 div at top level
        

      <div className="Project">
      <h3>Latest Projects</h3>
        {projectItems}
      </div>
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
export default Projects;
