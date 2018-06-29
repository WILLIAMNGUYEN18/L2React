import React, { Component } from 'react';
//import logo from './logo.svg';


class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }

    }
    static defaultProps = {
        categories: ['Web Development', 'Data Structures', 'Data Visualization']
    }

    handleSubmit(e){
        //console.log('Submitted');
        if(this.refs.title.value === ''){ //validating for blank
            alert('Title is required');
        } else {
            this.setState({newProject:{ //changing state based on input
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){ //secondary parameter for callback function
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        //console.log(this.refs.title.value); testing successful handleSubmit taking in title
        e.preventDefault();
    }

  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value = {category}>{category}</option>
    });

    return (//what is returned from render
      //only 1 div at top level
        

      <div className="Project">
        <h3> Add Project </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>           
            <div>
                <label> Title </label> <br />
                <input type = "text" ref = "title" />
            </div>
            <div>
                <label> Category </label> <br />
                <select ref = "category">
                    {categoryOptions}
                </select>
            </div>
            <input type="submit" value = "Submit" />
        </form>
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
export default AddProject;
