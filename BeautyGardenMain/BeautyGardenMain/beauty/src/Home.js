import React from "react";
import woods from "./images/woods.jpg";
import "./Home.css"
import "../src/images/woods.css";
import logoImg from "./images/TBG-image-0.png";

const Home = () => {
    return (

        <body>
            

             <div className="LogoOutline">  
                <img src={ logoImg } alt="TBG-image-0" />
             </div>

             <div className="ImageOutline">
                 <h2>Background Image(s)</h2>
                 <div className="BookingLink">
                     Booking Link placeholder
                 </div>
             </div>


             <div className="QuoteBox">
                 QUOTE Box
             </div>
                  
              <div className="MoreImages">
                  More images Box
              <div className="ImageRow">
              <img className="woods" src={woods}></img>
              <div className="woods_overlay">
                  <div className= 'woods_review'>This is a review. I love this place. 5 stars. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
              </div>
              </div> 
              </div>
                 
             
        </body>



        
    )
}


export default Home;