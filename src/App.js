import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <About />
        <Projects />

        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
