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
                            >Full Name{newContact.nameError}</label>
                            <input
                                className="fullNameText"
                                placeholder="E.g., Kat Jones"
                                type="text"
                                name="fullName"
                                value={newContact.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputField_2">
                            <label
                                htmlFor="phoneNumber"
                                className="phoneNumber"
                            >Phone Number{newContact.phoneError}</label>
                            <input
                                className="phoneNumberText"
                                placeholder="E.g., (123)456 7890"
                                type="text"
                                name="phoneNumber"
                                maxLength = {10}
                                value={newContact.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <li className="dividerLine_1" />
                        <div className="inputField_3" >
                            <label
                                htmlFor="email"
                                className="email"
                            >Email Address{newContact.emailError}</label>
                            <input
                                className="emailText"
                                placeholder="E.g., mail@example.com"
                                type="text"
                                name="email"
                                value={newContact.email}
                                onChange={handleChange}
                            />
                        </div>
                        <li className="dividerLine_2" />
                        <div className="inputField_4">
                            <label
                                htmlFor="comment"
                                className="comment"
                            >Comment{newContact.commentError}</label>
                            <textarea
                                className="commentText"
                                placeholder="Type your message here..."
                                type="text"
                                name="comment"
                                value={newContact.comment}
                                onChange={handleChange}
                            />
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