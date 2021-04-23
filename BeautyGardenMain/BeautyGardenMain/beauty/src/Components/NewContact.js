import React, { useState, useEffect } from 'react';
import useForm from '../useForm';
import './NewContact.css';

const NewContact = () => {
    const { handleChange, newContact, handleSubmit, isLoading } = useForm();
   
    return (
        <div className="contactContent" >
            <body className="contactPage">
                <div className="floatBox">
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="inputField_1">
                            <label
                                htmlFor="fullName"
                                className="fullName"
                            >Full Name</label>
                            <input
                                className="fullNameText"
                                placeholder="Full Name"
                                type="text"
                                name="fullName"
                                value={newContact.fullName}
                                onChange={handleChange}
                            />
                            <div style ={{ color: "red "}}>{newContact.nameError}</div>
                        </div>
                        <div className="inputField_2">
                            <label
                                htmlFor="phoneNumber"
                                className="phoneNumber"
                            >Phone Number</label>
                            <input
                                className="phoneNumberText"
                                placeholder="Phone Number"
                                type="text"
                                name="phoneNumber"
                                maxLength = {10}
                                value={newContact.phoneNumber}
                                onChange={handleChange}
                            />
                            <div style ={{ color: "red "}}>{newContact.phoneError}</div>
                        </div>
                        <div className="inputField_3" >
                            <label
                                htmlFor="email"
                                className="email"
                            >Email Address</label>
                            <input
                                className="emailText"
                                placeholder="Email Address"
                                type="text"
                                name="email"
                                value={newContact.email}
                                onChange={handleChange}
                            />
                            <div style ={{ color: "red "}}>{newContact.emailError}</div>
                        </div>
                        <div className="inputField_4">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                className="commentText"
                                placeholder="Is there anything you would like to know about?"
                                type="text"
                                name="comment"
                                value={newContact.comment}
                                onChange={handleChange}
                            />
                            <div style ={{ color: "red "}}>{newContact.commentError}</div>
                        </div>
                        <div>
                            { !isLoading && <button className="submitBtn" type="submit">Submit</button> }
                            { isLoading && <button className="btn blue darken-3" disabled>
                                <i className = "fas fa-spinner fa-spin"></i> Submitting...
                            </button>}
                            </div>
                    </form>
                </div>
            </body>
        </div>
    );
}
export default NewContact;