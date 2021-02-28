import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {Route, Link} from "react-router-dom";
import NavBar from "./NavBar";
import ContactList from "./ContactList";
import axios from "axios";
import { requirePropFactory } from '@material-ui/core';



function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contactlist" component={ContactList} />
     
        
        </div>
  );
}

export default App;
