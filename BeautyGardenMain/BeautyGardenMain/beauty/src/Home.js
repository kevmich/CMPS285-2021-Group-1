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

                    <div className="DividerLine">

                    </div>

                    
                    <h6> Our goal is to provide the highest quality, most </h6>
                    <h6> affordable beauty services on the Northshoe. </h6>
                    <h6> From the moment you walk into your bouquet salon, </h6>
                    <h6> you will receive exceptional customer service </h6>
                    <h6> and a personalized experiences. </h6>

                    

                    <h5>
                        We can't wait to meet you!
                    </h5>
                    
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