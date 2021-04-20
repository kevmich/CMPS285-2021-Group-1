import React from 'react';
import './TeethTreatments.css'
import teeth2 from '../images/teeth2.svg';

const TeethTreatments = () => {
    return (
        <body className="Tbody">
            <div className ="TeethMainTitle">
                <h2>Teeth Treatments</h2>
            </div>

            <div className="TeethImages">

                <div className="TeethBoxes">
                <img className="teeth2" src={ teeth2 } alt="teeth2.svg" />

                </div>

                <div className="TeethBoxes">
                    <h3>Cosmetic Teeth Whitening</h3>
                    <br></br>
                    <h5>With our all natural gel and LED light, </h5>
                    <h5>your smile will whiten 4-9 shades in</h5>
                    <h5> only 60-minutes!</h5>

                </div>

            
            </div>


            <div className="TeethTitles">
            <div className="TTitleOutlines1">
                  <div className="TLine1"></div>
               </div>
               <div className="TTitleOutlines2">
                  <h1> Pricing</h1>
               </div>
               <div className="TTitleOutlines3">
                  <div className="TLine2"></div>
               </div>
            </div>

            <div className="TtableContainer">
                <div className="TrightPrice">

                <div className="TSmallFont">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>90</h4>
                <br></br>
                <h4>50</h4>
                </div>

                </div>

                <div className="TleftPrice">
                <br></br>
                <h1 className="TeethPriceTitle">Cosmetic Teeth Whitening</h1>

                <div className="TSmallFont">
                <br></br>
                <h4>60-minute session</h4>
                <br></br>
                <h4>30-Minute Touchup Session</h4>
                </div>

                </div>

            </div>






            <div className="TeethTitles">

            <div className="TTitleOutlines1">
                  <div className="TLine1"></div>
               </div>
               <div className="TTitleOutlines2">
                  <h1> F.A.Q.</h1>
               </div>
               <div className="TTitleOutlines3">
                  <div className="TLine2"></div>
               </div>


            </div>

            <div className="TTFAQ">
                <br></br>
                <br></br>
                <h3> I have sensitive teeth, can I get my teeth whitened? </h3>
                <h5> We use an all natural gel paired with an LED light. You will experience little to no sensitivity!</h5>
                <br></br>
                <br></br>
                <h3> How many sessions will I need? </h3>
                <h5> Most people only need 1 of our 60-minute sessions to be happy with their smile! A 30-</h5>
                <h5> minute touchup is recommended every 4 months to keep your smile shining. </h5>
                <h5> Depending on your habits (coffee, tobacco, etc.), another session may be required. </h5>
            


            </div>




















     </body>
    )
}

export default TeethTreatments;