import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Tools from './components/Tools/Tools';
import ContactUs from './components/Contact/contact';
import Info from './components/Info/info';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <About />
        <Projects />
        <Info />
        <Tools />
        <ContactUs />
        <Footer />

        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
