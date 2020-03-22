import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' render ={routerProps => <About/>} />
        <Route exact path = '/about' render ={routerProps => <About/>} />
      </Switch>
    </div>
  );
}

export default App;
