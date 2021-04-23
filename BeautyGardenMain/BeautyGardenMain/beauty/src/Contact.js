import React from "react";
import NewContact from "./Components/NewContact.js";
import './Components/NewContact.css';

const Contact = () => {
    return (
    <body className="contact_body">
            <div className="FaceWaxTitles">
                <div className="FTitleOutlines1">
                    <div className="FLine1" />
                </div>
                <div className="FTitleOutlines2">
                    <h1>Contact Us</h1>
                </div>
                <div className="FTitleOutlines3">
                    <div className="FLine2" />
                </div>
            </div>
        <NewContact />
    </body>
        
    )
}

export default Contact;
