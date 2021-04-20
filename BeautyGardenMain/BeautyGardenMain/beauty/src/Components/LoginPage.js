import React, { useState } from 'react';
import './LoginPage.css';
import loginForm from '../loginForm';

const loginPage = () => {
    const {handleChange, login, handleSubmit, isLoading } = loginForm();

        return (
            
            <div className="container" >
                <form className='white' onSubmit={handleSubmit}>
                    <body>                 
                
                      <div className="input-field">
                            <label htmlFor="userName">User Name</label>
                            <input type="text" name="userName" value={login.userName} onChange={handleChange} placeholder="example@yahoo.com" />
                         </div>   

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={login.password} onChange={handleChange} placeholder ="Please enter your password"
                                styles={{width:"300px"}} />
                            </div>
                            <div>
                        { !isLoading && <button className="btn blue darken-3" type="submit">Submit</button> }
                        { isLoading && <button className="btn blue darken-3" disabled>
                            <i className = "fas fa-spinner fa-spin"></i> Submitting...
                        </button>}
                    </div>
                    </body>  
                </form>
            </div>
        );
    }
export default loginPage;