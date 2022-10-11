import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import About from './Components/About/AboutContainer';
import Contact from './Components/ContactMe/ContactContainer';
import ProjectsContainer from './Components/Projects/ProjectsContainer';
import ReadingList from './Components/ReadingList/ReadingList';
import OptinPage from  './Components/Optin/OptinPage'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' render ={routerProps => <About/>} />
        <Route exact path = '/about' render ={routerProps => <About/>} />
        <Route exact path = '/network' render = {routerProps => <Contact/> } />
        <Route exact path = '/manifest' render = {routerProps => <Contact/> } />
        <Route exact path = '/me' render = {routerProps => <Contact/> } />
        <Route exact path = '/projects' render = {routerProps => <ProjectsContainer/> } />
        <Route exact path = '/books' render = {routerProps => <ReadingList/> } />
        <Route exact path = '/optin' render = {routerProps => <OptinPage/> } />
      </Switch>
    </div>
  );
}

export default App;
