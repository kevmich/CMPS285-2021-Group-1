import React, { useState, useEffect } from 'react';
import axios from 'axios';
import validate from "../validateInfo";
import useForm from '../useForm'

const NewContact = () => {
    const { handleChange, newContact, handleSubmit, errors } = useForm(validate);
   

    
    
        

       
    

    return (
        <div className="container" >
            <form className='white' onSubmit={handleSubmit}>
                <h5 className="grey-text.text-darken-3">Contact Us</h5>                        
                <div className="input-field">
               
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" value={newContact.fullName} onChange={handleChange} required /> 
                   
                </div>
                <div className="input-field">
                <label htmlFor="text">Phone Number</label>
                    <input type="text" name="phoneNumber" pattern="[0-9]+" value={newContact.phoneNumber} onChange={handleChange} required />
                
                </div>
                <div className="input-field" >
                <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={newContact.email} onChange={handleChange} required />
                    {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="input-field">
                <label htmlFor="comment">Comment</label>
                    <textarea type="text" name="comment" placeholder ="What would you like to know about?" value={newContact.comment} styles={{ width:"300px" }} onChange={handleChange} required />
                    </div>
                 <div>
                    <button className="btn blue darken-3" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default NewContact;