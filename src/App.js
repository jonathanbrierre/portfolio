import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import About from './Components/About/AboutContainer';
import Contact from './Components/ContactMe/ContactContainer';
import ProjectsContainer from './Components/Projects/ProjectsContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' render ={routerProps => <About/>} />
        <Route exact path = '/about' render ={routerProps => <About/>} />
        <Route exact path = '/contact' render = {routerProps => <Contact/> } />
        <Route exact path = '/projects' render = {routerProps => <ProjectsContainer/> } />
      </Switch>
    </div>
  );
}

export default App;
