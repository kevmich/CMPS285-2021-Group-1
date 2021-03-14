import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));

