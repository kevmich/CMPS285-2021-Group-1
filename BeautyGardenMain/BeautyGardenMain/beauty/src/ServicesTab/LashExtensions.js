import React from 'react';
import './LashExtensions.css'
import lash1 from "../images/lash1.jpg";
import lash2 from "../images/lash2.jpg";
import lash3 from "../images/lash3.jpg";

const LashExtensions = () => {
    return (
        <body className="bodyColor">
            <div className="MainTitle"> 
                <h1>Eyelash Extensions</h1>            
            </div>


            <div className="TitleStyling">
               <br></br>
                <h2>Signature Style</h2>
            </div>

            <div className="ServiceImages">

               <div className="TwoSect1">

                  <div className="LashesBoxes">
                  <img className="lash2" src={ lash2 } alt="lash2.jpg" />
                  </div>

                  <div className="LashesBoxes">
                     <h2 className="SmallFont">Classic Full Set</h2>
                     <br></br>
                     <h4 className="SmallFontBold">1 extension to 1 natural lash</h4>
                     <h4 className="SmallFont"> An everyday, natural looking lash style!</h4>
                  </div>


               </div>

               <div className="TwoSect2">

                  <div className="LashesBoxes">
                  <img className="lash1" src={ lash1 } alt="lash1.jpg" />
                  </div>

                  <div className="LashesBoxes">
                     <h2 className="SmallFont">Hybrid Full Set </h2>
                     <br></br>
                     <h4 className="SmallFontBold">Mix of classic & 2-3D volume lashes</h4>
                     <h4 className="SmallFont"> The perfect lash combo to create texture, with a touch of drama.</h4>                     
                  </div>


               </div>

               <div className="TwoSect3">

                  <div className="LashesBoxes">
                  <img className="lash3" src={ lash3 } alt="lash3.jpg" /> 
                  </div>

                  <div className="LashesBoxes">
                     <h2 className="SmallFont"> Volume Full Set</h2>
                     <br></br>
                     <h4 className="SmallFontBold">3-5 extensions per natural lash</h4>
                     <h4 className="SmallFont">Described as dark and dreamy, volume is also ideal for clients with sparse lashes to create thickness & density.</h4>                     
                  </div>


               </div>                              



               
              
            </div>

            <div className="TitleStyling">           
   
               <div className="TitleOutlines1">
                  <div className="Line1"></div>
               </div>
               <div className="TitleOutlines2">
                  <h1> Pricing</h1>
               </div>
               <div className="TitleOutlines3">
                  <div className="Line2"></div>
               </div>
               
            </div>


         <div className="tableContainer">

         <div className="leftPrice">
                <h1 className="PriceTitle"> Classic </h1>

                <div className="SmallFont">
                <br></br>
                <h4>Full Set</h4>
                <br></br>
                <h4>Two Week Refill</h4>
                <br></br>
                <h4>Three Week Refill</h4>
                </div>

             </div>  
               
             <div className="rightPrice">
                <div className="SmallFont">
                <br></br>
                <br></br>
                <br></br>
                <h4>115</h4>
                <br></br>
                <h4>50</h4>
                <br></br>
                <h4>55</h4>
                </div>

             </div>


             <div className="leftPrice">
                <h1 className="PriceTitle"> Hybrid Lashes </h1>

                <div className="SmallFont">
                <br></br>
                <h4>Full Set</h4>
                <br></br>
                <h4>Two Week Refill</h4>
                <br></br>
                <h4>Three Week Refill</h4>
                </div>
                
             </div>  


             <div className="rightPrice">
             <div className="SmallFont">
                <br></br>
                <br></br>
                <br></br>
                <h4>125</h4>
                <br></br>
                <h4>55</h4>
                <br></br>
                <h4>60</h4>
                </div>

             </div>


             <div className="leftPrice">
                <h1 className="PriceTitle"> Volume Lashes </h1>

                <div className="SmallFont">
                <br></br>
                <h4>Full Set</h4>
                <br></br>
                <h4>Two Week Refill</h4>
                <br></br>
                <h4>Three Week Refill</h4>
               </div>

             </div>  


             <div className="rightPrice">
             <div className="SmallFont">
                <br></br>
                <br></br>
                <br></br>
                <h4>135</h4>
                <br></br>
                <h4>60</h4>
                <br></br>
                <h4>65</h4>
                </div>
             </div>


             <div className="leftPrice">
                <h1 className="PriceTitle"> Mega Volume </h1>
                <div className="SmallFont">
                <br></br>
                <h4>Full Set</h4>
                <br></br>
                <h4>Two Week Refill</h4>
                <br></br>
                <h4>Three Week Refill</h4>
                </div>
             </div>  


             <div className="rightPrice">
             <div className="SmallFont">
                <br></br>
                <br></br>
                <br></br>
                <h4>150</h4>
                <br></br>
                <h4>65</h4>
                <br></br>
                <h4>70</h4>
                </div>
             </div>
     
         </div>

         <div className="TitleStyling">
         <div className="TitleOutlines1">
                  <div className="Line1"></div>
               </div>
               <div className="TitleOutlines2">
                  <h1> F.A.Q.</h1>
               </div>
               <div className="TitleOutlines3">
                  <div className="Line2"></div>
               </div>
         </div>


         
            <div className="FAQ">
               <br></br>
               <br></br>
               <h3>Do lash extensions damage your natural lashes? </h3>
               <h5 className="SmallFont">No! When applied properly with perfect isolation and weight, eyelash extensions will not harm your natural lashes.</h5>
               <br></br>
               <br></br>
               <h3>How long will my full set last? </h3>
               <h5 className="SmallFont"> A full set will last as long as your natural lash cycle, which is anywhere from 3-4 weeks, depending on the individual. </h5>
               <h5 className="SmallFont"> We recommend getting a fill anywhere between 2 and 3 weeks. </h5>
               <br></br>
               <br></br>
               <h3> Do lash extensions damage your natural lashes? </h3>
               <h5 className="SmallFont"> • Do not wash eyes, swim, or shower for 12 24 hours after lash extension application </h5>
               <h5 className="SmallFont"> • Avoid oil-based makeup products, including mascara and eye-makeup remover </h5>
               <h5 className="SmallFont"> • Refrain from rubbing your eyes </h5>
            </div>
     </body>
    )
}

export default LashExtensions;