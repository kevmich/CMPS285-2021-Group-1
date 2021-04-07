import React from "react";
import woods from "./images/woods.jpg";
import "./Home.css"
import "../src/images/woods.css";
import logoImg from "./images/TBG_Logo_2.png";
import logoImg2 from "./images/tbg-booking-bg.png";
import Booking from "./Components/BookingButton.js";

const Home = () => {
    return (

        <body>
            

             <div className="LogoOutline">  
                <img className="TBGlogo" src={ logoImg } alt="TBG_Logo_2.png" />
             </div>

             <div className="ImageOutline">
                 <h2>Background Image(s)</h2>
                 <div className="BookingLink">
                     
                    <a href='https://square.site/book/VKYEJ3SQ1VFW7/the-beauty-garden-slidell-la'>
                        <Booking />
                    </a>
                    
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