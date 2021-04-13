import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faGoogle} from "@fortawesome/free-brands-svg-icons";
import "./SocialButtons.css";

const SocialButtons = () =>{
   
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
   
    return (
        <div className="SocialContainer">
           
           <a
                
                href="https://m.facebook.com/TheBeautyGardenNorthshore"
                target = "_blank"
                rel = "noopener noreferrer"
                className="facebook social"
            >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
                href="https://www.instagram.com/thebeautygarden_northshore/"
                target = "_blank"
                rel = "noopener noreferrer"
                className="instagram social"
            >
            <FontAwesomeIcon icon={faInstagram} size="2x" />    
            </a>
            <a
                href="https://tinyurl.com/4sdsrvsn"
                target = "_blank"
                rel = "noopener noreferrer"
                className="google social"
            >
            <FontAwesomeIcon icon={faGoogle} size="2x" />    
            </a>      
            
        </div>
    );
}
export default SocialButtons;