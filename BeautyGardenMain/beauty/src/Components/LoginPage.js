import React, { useState, useEffect } from 'react';
import Login from '../Login';
import useForm from '../useForm'
import './LoginPage.css';

const LoginPage = () => {
    const { handleChange, newContact, handleSubmit, errors } = useForm();
   

    
    
        

       
    

    return (
        
        <div className="container" >
            <form className='white' onSubmit={handleSubmit}>
                <body>                 
             
                    <div className="input-field" >
                    <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="example@gmail.com" value={newContact.email} onChange={handleChange}  />
                        <div style ={{ color: "red "}}>{newContact.emailError}</div>
                        </div>
                        <div className="input-field">
                    <label htmlFor="password">Password</label>
                        <textarea type="text" name="comment" placeholder ="Please enter your password" value={newContact.comment}
                            styles={{width:"300px"}} onChange={handleChange}  />
                            <div style ={{ color: "red "}}>{newContact.commentError}</div>
                        </div>
                    <div>
                        <button className="btn blue darken-3" type="submit">Submit</button>
                    </div>
                </body>  
            </form>
        </div>
    );
}
export default LoginPage;