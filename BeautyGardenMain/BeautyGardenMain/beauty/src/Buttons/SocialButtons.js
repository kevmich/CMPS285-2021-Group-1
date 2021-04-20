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
                title="Go to external site: https://m.facebook.com/TheBeautyGardenNorthshore"
            >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
                href="https://www.instagram.com/thebeautygarden_northshore/"
                target = "_blank"
                rel = "noopener noreferrer"
                className="instagram social"
                title="Go to external site: https://www.instagram.com/thebeautygarden_northshore/"
            >
            <FontAwesomeIcon icon={faInstagram} size="2x" />    
            </a>
            <a
                href="https://www.google.com/search?q=The+Beauty+Garden+Northshore"
                target = "_blank"
                rel = "noopener noreferrer"
                className="google social"
                title="Go to exteral site: https://www.google.com/search?q=The+Beauty+Garden+Northshore"
            >
            <FontAwesomeIcon icon={faGoogle} size="2x" />    
            </a>      
            
        </div>
    );
}
export default SocialButtons;