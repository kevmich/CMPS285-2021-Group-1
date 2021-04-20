import React, { useState } from 'react';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navigation from "./Navigation";
import ListPage from './ListPage';
import Login from './Login';
import FaceNWax from './ServicesTab/FaceNWax';
import FatDissolve from './ServicesTab/FatDissolve';
import LashExtensions from './ServicesTab/LashExtensions';
import LipFiller from './ServicesTab/LipFillers';
import TeethTreatment from './ServicesTab/TeethTreatments';
import Footer from "./Components/Footer";
import BlogPage from "./BlogPage";
import AddBlogPage from "./AddBlogPage";
import portfolio from "./Components/portfolio";
import imageUpload from "./Components/imageUpload";


import {BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Navbar from './Navigation';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBar">
      <div className="pageContainer"> 
        <Router>
        <Navbar />
        <div className="contentWrap">
          <Switch>
            <Route exact path='/' exact component={Home} />
            <Route path='/contact-us' exact component={Contact} />
            <Route path='/contact-list' exact component={ListPage} />
            <Route path='/login' exact component={Login} />
            <Route path='/about' exact component={About} />
            <Route path='/face-and-wax' exact component={FaceNWax} />
            <Route path='/fat-dissolve' exact component={FatDissolve} />
            <Route path='/lash-extensions' exact component={LashExtensions} />
            <Route path='/lip-filler' exact component={LipFiller} />
            <Route path='/teeth-treatment' exact component={TeethTreatment} />
            <Route path='/blog' exact component={BlogPage} />
            <Route path='/newblog' exact component={AddBlogPage} />
            <Route path='/portfolio' exact component={portfolio} />
            <Route path='/image-upload' exact component={imageUpload} />
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    </div>
    
  );
}

export default App;