import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProjects from './Components/AddProjects';
import logo from './invoice.png';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  
  
  componentWillMount(){
    this.setState({projects: [
    {
      title: 'Project 1',
      category: 'Tutorials'
    },
    {
      title: 'Project 2',
      category: 'Challenges'
    },
    {
      title: 'Project 3',
      category: 'Assignments'
    }
  ]});
  }
  
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <AddProjects/>
        <Projects projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
