import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewContact = () => {
    const [newContact, setNewContact] = useState(
        { fullName: '', phoneNumber: '', email: '', comment: ''}
    );

    const handleChange = (event) => {
        setNewContact({...newContact, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://localhost:44381/api/UserContact', newContact)
        .then(function (response) {
            console.log(response)
            if (response !=null) {
                alert("Contact information submitted successfully.");
            }  
        })
        .catch(function (error) {
            console.log(error)
        })
    
    }

    
        

       
    

    return (
        <div className="container">
            <form className='white' onSubmit={handleSubmit}>
                <h5 className="grey-text.text-darken-3">Contact Us</h5>                        
                <div className="input-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" value={newContact.fullName} onChange={handleChange} required />
                </div>
                <div className="input-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" name="phoneNumber" value={newContact.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="input-field" >
                <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={newContact.email} onChange={handleChange} required />
                    </div>
                    <div className="input-field" style={styles}>
                <label htmlFor="comment">Comment</label>
                    <input type="text" name="comment" value={newContact.comment} styles={{ width:"300px" }} onChange={handleChange} required />
                    </div>
                 <div>
                    <button className="btn blue darken-3" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}
export default NewContact;