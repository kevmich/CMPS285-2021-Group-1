import React, { useState } from 'react';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navigation from "./Navigation";
import ListPage from './ListPage';
import OfferedServices from './OfferedServices';
import Login from './Login';
import FaceNWax from './ServicesTab/FaceNWax';
import FatDissolve from './ServicesTab/FatDissolve';
import LashExtensions from './ServicesTab/LashExtensions';
import LipFiller from './ServicesTab/LipFillers';
import TeethTreatment from './ServicesTab/TeethTreatments';

import {BrowserRouter as Router,
  Switch,
  Route,
  Link 
  } from "react-router-dom";
import Navbar from './Navigation';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div classname="NavBar">
      <div>
        <Navbar />
        <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={OfferedServices} />
            <Route path='/contact-us' exact component={Contact} />
            <Route path='/contact-list' exact component={ListPage} />
            <Route path='/login' exact component={Login} />
            <Route path='/about' exact component={About} />
            <Route path='/face-and-wax' exact component={FaceNWax} />
            <Route path='/fat-dissolve' exact component={FatDissolve} />
            <Route path='/lash-extensions' exact component={LashExtensions} />
            <Route path='/lip-filler' exact component={LipFiller} />
            <Route path='/teeth-treatment' exact component={TeethTreatment} />
          </Switch>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;