import React, { useState, useEffect } from 'react';
import useForm from '../useForm'
import './NewContact.css';

const NewContact = () => {
    const { handleChange, newContact, handleSubmit, errors } = useForm(validate);
   

    
    
        

       
    

    return (
        
        <div className="container" >
            <form className='white' onSubmit={handleSubmit}>
                <body>                 
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
                        <input type="email" name="email" placeholder="example@gmail.com" value={newContact.email} onChange={handleChange} required />
                        {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className="input-field">
                    <label htmlFor="comment">Comment</label>
                        <textarea type="text" name="comment" placeholder ="What would you like to know about?" value={newContact.comment}
                            styles={{
                                width:"300px"
                                
                                
                            }} onChange={handleChange} required />
                        </div>
                    <div>
                        <button className="btn blue darken-3" type="submit">Submit</button>
                    </div>
                </body>  
            </form>
        </div>
    );
}
export default NewContact;