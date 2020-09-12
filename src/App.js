import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Tools from './components/Tools/Tools';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar fixed="top" />
        <About />
        <Projects />
        <Tools />
        <Footer />

        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
