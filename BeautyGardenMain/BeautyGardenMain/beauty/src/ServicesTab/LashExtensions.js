import React from 'react';
import './LashExtensions.css'
import lash1 from "../images/lash1.jpg";
import lash2 from "../images/lash2.jpg";
import lash3 from "../images/lash3.jpg";

const LashExtensions = () => {
    return (
        <body>
            <div className="MainTitle"> 
                <h1>Eyelash Extensions TEST!!!</h1>            
            </div>

            <div className="OpenSpace">
                
            </div>


            <div className="TitleStyling">
                <h2>Signature Style</h2>
            </div>

            <div className="ServiceImages">
               <img className="lash2" src={ lash2 } alt="lash2.jpg" />
               <img className="lash1" src={ lash1 } alt="lash1.jpg" />
               <img className="lash3" src={ lash3 } alt="lash3.jpg" />
            </div>

            <div className="TitleStyling">
                <h2>Prices</h2>
            </div>


         <div className="tableContainer">

             <div className="leftPrice">
                <h1 className="PriceTitle"> classic </h1>
                <h3>Full Set</h3>
                <h3>Two Week Refill</h3>
                <h3>Three Week Refill</h3>
             </div>                
             <div className="rightPrice">
                <h1>  [empty space here]  </h1>
                <h3>115</h3>
                <h3>115</h3>
                <h3>115</h3>
             </div>


             <div className="leftPrice">
                <h1 className="PriceTitle"> classic </h1>
                <h3>Full Set</h3>
                <h3>Two Week Refill</h3>
                <h3>Three Week Refill</h3>
             </div>                
             <div className="rightPrice">
                <h1>  [empty space here]  </h1>
                <h3>115</h3>
                <h3>115</h3>
                <h3>115</h3>
             </div>

             <div className="leftPrice">
                <h1 className="PriceTitle"> classic </h1>
                <h3>Full Set</h3>
                <h3>Two Week Refill</h3>
                <h3>Three Week Refill</h3>
             </div>                
             <div className="rightPrice">
                <h1>  [empty space here]  </h1>
                <h3>115</h3>
                <h3>115</h3>
                <h3>115</h3>
             </div>

             <div className="leftPrice">
                <h1 className="PriceTitle"> classic </h1>
                <h3>Full Set</h3>
                <h3>Two Week Refill</h3>
                <h3>Three Week Refill</h3>
             </div>                
             <div className="rightPrice">
                <h1>  [empty space here]  </h1>
                <h3>115</h3>
                <h3>115</h3>
                <h3>115</h3>
             </div>


     
         </div>

         <div className="TitleStyling">
            <h2>Frequently asked questions</h2>
         </div>
            <div className="FAQ">
                    FAQ HERE
            </div>
     </body>
    )
}

export default LashExtensions;