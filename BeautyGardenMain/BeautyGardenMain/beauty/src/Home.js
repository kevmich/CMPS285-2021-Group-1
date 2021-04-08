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

                     <div className="BookTopText">

                     <h4> The Beauty Garden is your ultimate source in the </h4>
                     <h4> Northshore area for clean beauty products, cutting </h4>     
                     <h4> edge beauty technology and stunning results without </h4>    
                     <h4> invasive surgical prodcedures.</h4> 
                     
                     </div>
 

                     
                     
                    <a href='https://square.site/book/VKYEJ3SQ1VFW7/the-beauty-garden-slidell-la'>
                        <Booking />
                    </a>

                    <h4>
                        Our goal is to provide the highest quality, most
                        affordable beauty services on the Northshoe.
                        From the moment you walk into your bouquet salon, 
                        you will receive exceptional customer service
                        and a personalized experiences.

                    </h4>

                    <h4>
                        We can't wait to meet you!
                    </h4>
                    
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
                  <div className= 'woods_review'>This is a review. I love this place. 5 stars.</div>
              </div>
              </div> 
              </div>
                 
             
        </body>



        
    )
}


export default Home;