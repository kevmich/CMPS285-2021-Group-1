import React, { useState, useEffect } from 'react';

import useForm from '../useForm'
import './NewContact.css';




const NewContact = () => {
    const { handleChange, newContact, handleSubmit } = useForm();
   

    
    
        

       
    
    
    return (
   
        <body>
            <div className="container" >
                <form className='white' onSubmit={handleSubmit}>                       
                    <div className="input-field">
                
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" value={newContact.fullName} onChange={handleChange}  /> 
                    <div style ={{ color: "red "}}>{newContact.nameError}</div>
                    </div>
                    <div className="input-field">
                    <label htmlFor="text">Phone Number</label>
                        <input type="text" name="phoneNumber"  maxLength = {10} value={newContact.phoneNumber} onChange={handleChange}  />
                        <div style ={{ color: "red "}}>{newContact.phoneError}</div>
                    </div>
                    <div className="input-field" >
                    <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="example@gmail.com" value={newContact.email} onChange={handleChange}  />
                        <div style ={{ color: "red "}}>{newContact.emailError}</div>
                        </div>
                        <div className="input-field">
                    <label htmlFor="comment">Comment</label>
                        <textarea type="text" name="comment" placeholder ="What would you like to know about?" value={newContact.comment} onChange={handleChange}  />
                             <div style ={{ color: "red "}}>{newContact.commentError}</div>
                        </div>
                    <div>
                        <button className="btn blue darken-3" type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        </body>
    
    );
}
export default NewContact;