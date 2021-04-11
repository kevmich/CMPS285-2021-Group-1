import React from "react";
import TBG from "./images/TBG-Logo.jpg";
import woods from "./images/woods.jpg";
import "./Home.css"
import "../src/images/TBG-Logo.css";

const Home = () => {
    return (

        <body>
            

             <div className="LogoOutline">  
             <div className="ImageRow">
              <img className="TBG-Logo" src={TBG}></img> 
             </div>
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