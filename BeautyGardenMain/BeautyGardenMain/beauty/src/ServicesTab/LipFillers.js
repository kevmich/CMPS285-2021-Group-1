import React from 'react';
import './LipFillers.css'
import LipFillers1 from "../images/LipFillers1.jpg";
import lips1 from "../images/lips1.jpg";
import lips2 from "../images/lips2.jpg";
import lips3 from "../images/lips3.jpg";


const LipFillers = () => {
    return (
        <body className="FillerBody">
            <div className="FillersMainTitle">
                <h2>Hyaluron Pen Lip Filler</h2>
            </div>

            <div className="TwoSectionContainer">

                <div className="BoxesOne">

                    <img className="LipFillers1" src={ LipFillers1 } alt="LipFillers1.jpg" />

                </div>

                <div className="BoxesOne">
                    <div className="TitleSpace1"> 
                        <h3>1mL Lip Filler </h3>                  
                    
                    </div>
                    <div className="TitleSpace2">
                        <h3>$300</h3>
                    </div>
                
                <div className="FillSmallFont">
                <br></br>
                <br></br>
                <br></br>
                <h5>
                1mL of 100% hyaluronic acid using our 
                needleless hyaluron pen. 1mL is used 
                for all first time clients to provide a 
                natural, plump look!
                </h5>
                </div>

                </div>

            </div>

            <div className="TwoSectionContainer">

                <div className="SectionImages">
                <img className="Lips1" src={ lips1 } alt="lips1.jpg" />

                </div>

                <div className="SectionImages">
                <img className="Lips2" src={ lips2 } alt="lips2.jpg" />

                </div>

                <div className="SectionImages">
                <img className="Lips3" src={ lips3 } alt="lips3.jpg" />

                </div>
            </div>



            <div className="FillersTitles">
            <div className="FillTitleOutlines1">
                  <div className="FillLine1"></div>
               </div>
               <div className="FillTitleOutlines2">
                  <h1> F.A.Q.</h1>
               </div>
               <div className="FillTitleOutlines3">
                  <div className="FillLine2"></div>
               </div>


            </div>
            
            <div className="FillersFAQ">
            <br></br>
               <br></br>
               <h3>How long will 1mL of filler last? </h3>
               <h5>1mL of hyaluronic acid lip filler will last 3-5 months. Each time you get your filler done, it will last longer each time! </h5>
               <br></br>
               <br></br>
               <h3> Will I have any side effects?</h3>
               <h5> The body creates hyaluronic acid naturally, making it impossible to be allergic to the product. Some slight bruising and/or swelling may occur.</h5>
               <br></br>
               <br></br>
               <h3> How often can I get my lips done? </h3>
               <h5> If after the first 1mL you are looking to add more volume, you can get another mL a week from your previous appointment.</h5>
               <br></br>
               <br></br>
               <h3> What is the difference between the Hyaluron pen and traditional filler injections?</h3>
               <h5>• No needles</h5>
               <h5>• Minimal to no pain at all </h5>
               <h5>• Minimal to no swelling or bruising</h5>
               <h5>• Results are natural and instant</h5>
               <h5>• The more you hydrate, the more plump your lips get</h5>
               <h5>• 100% hyaluronic acid used</h5>
            </div>
     </body>
    )
}

export default LipFillers;