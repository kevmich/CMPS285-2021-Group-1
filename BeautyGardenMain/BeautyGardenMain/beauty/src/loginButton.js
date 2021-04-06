import React from 'react';
import './loginButton.css';
import {Link} from 'react-router-dom';

export function loginButton() {
    return (
        <button className='loginBtn'>Login</button>
    );
}

export default loginButton;