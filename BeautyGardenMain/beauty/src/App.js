import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Academy from "./Academy";
import Services from './Services';
import React from "react";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import MeetTheTeam from './MeetTheTeam';
import Portfolio from './Portfolio';
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/academy" component={Academy} />
      <Route exact path="/meetTheTeam" component={MeetTheTeam} />
      <Route exact path="/portfolio" component={Portfolio} />
      </div>
  );
}

export default App;
