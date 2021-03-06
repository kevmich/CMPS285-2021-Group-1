import React from 'react';
import './FatDissolve.css'
import FatDissolvePic from "../images/FatDissolvePic.jpg";

const FatDissolve = () => {
    return (
        <body className="DissolveBody">
            <div className="DissolveMainTitle">
                <h2>Fat dissolve Treatment</h2>
            </div>

            <div className="BoxesContainer">

                <div className="DissleftBox">
                <img className="FatDissolvePic" src={ FatDissolvePic } alt="FatDissolvePic.jpg" />
                </div>

                <div className="DissrightBox">
                    <br></br>
                    <br></br>
                 
                    <h1>Fat Dissolve Treatment</h1>
                    <h4>Kybella is a product made of deoxycholic acid, which is a naturally occurring 
                        molecule that aids in the breakdown and absorption of fat.
                        This is the only FDA-Approved treatment that destroys fat cells permanently! </h4>

                </div>

            </div>

            <div className="DissolveTitles">
            <div className="DissTitleOutlines1">
                  <div className="DissLine1"></div>
               </div>
               <div className="DissTitleOutlines2">
                  <h1> F.A.Q.</h1>
               </div>
               <div className="DissTitleOutlines3">
                  <div className="DissLine2"></div>
               </div>

            </div>
            
            <div className="DissolveFAQ">
                <br></br>
                <br></br>
                <h3>How many sessions will I need to notice a difference?</h3>
                <h5>You will be able to notice results after the first session. We recommend 2-4 sessions, depending on your goals. </h5>

                <br></br>
                <br></br>
                <h3>How is it needle free? Does it hurt?</h3>
                <h5>We use a hyaluron pen for our procedures instead of a needle! </h5>
                <h5>A hyaluron pen is a pressurized device that inserts the filler into the skin. This procedure does not hurt at all, actually!</h5>

                <br></br>
                <br></br>
                <h3>Side Effects? </h3>
                <h5>Being a naturally occurring substance, the chances for any side effects are VERY rare and almost impossible. </h5>
                <h5>You will notice small pinpoint dots where the filler was inserted. These will subside in about 3 days after your procedure. </h5>
                <h5>You may use makeup to cover them in needed as well!</h5>

                <br></br>
                <br></br>
                <h3>How long will the results last?</h3>
                <h5>Kybella permanently dissolves the fat. Your results will last forever with proper diet and upkeep! </h5>                               
            </div>
     </body>
    )
}

export default FatDissolve;