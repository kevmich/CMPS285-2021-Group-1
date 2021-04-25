import React from "react";
import "./Home.css"
import "../src/images/woods.css";
import logoImg from "./images/TBG_Logo_2.png";
import Booking from "./Buttons/BookingButton.js";
import review1 from "./images/review1.png";
import review2 from "./images/review2.png";
import review3 from "./images/review3.png";





const Home = () => {
    return (

        <body className="HomeBody">
            

             <div className="LogoOutline">  
                <img className="TBGlogo" src={ logoImg } alt="TBG_Logo_2.png" />
             </div>

             <div className="ImageOutline" >
             <div className="BookingLink">
                <div className="BookTopText">
                    <div className="topText">
                        <h5>The Beauty Garden is your ultimate source in the
                        Northshore area for clean beauty products, cutting
                        edge beauty technology and stunning results without
                        invasive surgical prodcedures.</h5>
                    </div>
                </div>
                    <a
                        href='https://square.site/book/VKYEJ3SQ1VFW7/the-beauty-garden-slidell-la'
                        target = "_blank"
                        rel = "noopener noreferrer"
                    >
                        <Booking />
                    </a>
                <div className="DividerLine" />
                    <div className="bottomText">
                        <h5>Our goal is to provide the highest quality, most
                        affordable beauty services on the Northshoe.
                        From the moment you walk into your bouquet salon,
                        you will receive exceptional customer service
                        and a personalized experience.</h5>
                    </div>
                    <div className="exitText">
                        <div>We can't wait to meet you!</div>
                    </div>
                </div>
            </div>
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
             <div className="QuoteBox">
             <h1 className="QuoteFont1"> "Love of beauty is taste. </h1>
             <h1 className="QuoteFont1"> the creation of beauty is art." </h1>
             <h3 className="QuoteCurs1"> Ralph Waldo Emerson</h3>
             <h1 className="QuoteFont1"> And now a word from... </h1>
             <br></br>
             <h1 className="QuoteCurs2"> Our beautiful clients</h1>
            </div>
        </div>          



         <div className="MoreImages">


              <div className="ImageRow">
                <img className="review" src={ review1 } alt="review1.png" />
              <div className="woods_overlay">
                  <div className= 'woods_review'>This is a review. I love this place. 5 stars.</div>
              </div>
              </div> 

              <div className="ImageRow">
                <img className="review" src={ review2 } alt="review1.png" />
              <div className="woods_overlay">
                  <div className= 'woods_review'>Second Review</div>
              </div>
              </div> 

              <div className="ImageRow">
                <img className="review" src={ review3 } alt="review3.png" />
              <div className="woods_overlay">
                  <div className= 'woods_review'>Third Review</div>
              </div>
              </div> 


         </div>                 
           
        </body>



        
    )
}


export default Home;
