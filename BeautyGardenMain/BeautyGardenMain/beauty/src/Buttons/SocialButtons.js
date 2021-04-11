import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import "./SocialButtons.css";

const SocialButtons = () =>{
    return (
        <div className="SocialContainer">
           
           <a
                href="https://www.facebook.com"
                className="facebook social"
            >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
                href="https://www.instagram.com"
                className="instagram social"
            >
            <FontAwesomeIcon icon={faInstagram} size="2x" />    
            </a>   
            
        </div>
    );
}
export default SocialButtons;