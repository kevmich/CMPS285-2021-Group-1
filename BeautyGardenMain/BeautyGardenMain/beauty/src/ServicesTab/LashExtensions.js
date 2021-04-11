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
                <h1 className="PriceTitle"> Classic </h1>
                <br></br>
                <h4>Full Set</h4>
                <br></br>
                <h4>Two Week Refill</h4>
                <br></br>
                <h4>Three Week Refill</h4>
             </div>  


             <div className="rightPrice">
                <br></br>
                <br></br>
                <br></br>
                <h4>115</h4>
                <br></br>
                <h4>50</h4>
                <br></br>
                <h4>55</h4>
             </div>


             <div className="leftPrice">
                <h1 className="PriceTitle"> Hybrid Lashes </h1>
                <br></br>
                <h4>Full Set</h4>
                <br></br>
                <h4>Two Week Refill</h4>
                <br></br>
                <h4>Three Week Refill</h4>
             </div>  


             <div className="rightPrice">
                <br></br>
                <br></br>
                <br></br>
                <h4>125</h4>
                <br></br>
                <h4>55</h4>
                <br></br>
                <h4>60</h4>
             </div>


             <div className="leftPrice">
                <h1 className="PriceTitle"> Volume Lashes </h1>
                <br></br>
                <h4>Full Set</h4>
                <br></br>
                <h4>Two Week Refill</h4>
                <br></br>
                <h4>Three Week Refill</h4>
             </div>  


             <div className="rightPrice">
                <br></br>
                <br></br>
                <br></br>
                <h4>135</h4>
                <br></br>
                <h4>60</h4>
                <br></br>
                <h4>65</h4>
             </div>


             <div className="leftPrice">
                <h1 className="PriceTitle"> Mega Volume </h1>
                <br></br>
                <h4>Full Set</h4>
                <br></br>
                <h4>Two Week Refill</h4>
                <br></br>
                <h4>Three Week Refill</h4>
             </div>  


             <div className="rightPrice">
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

         <div className="TitleStyling">
            <h2>Frequently asked questions</h2>
         </div>
            <div className="FAQ">
               <br></br>
               <br></br>
               <h3>Do lash extensions damage your natural lashes? </h3>
               <h5>No! When applied properly with perfect isolation and weight, eyelash extensions will not harm your natural lashes.</h5>
               <br></br>
               <br></br>
               <h3>How long will my full set last? </h3>
               <h5> A full set will last as long as your natural lash cycle, which is anywhere from 3-4 weeks, depending on the individual. </h5>
               <h5> We recommend getting a fill anywhere between 2 and 3 weeks. </h5>
               <br></br>
               <br></br>
               <h3>Do lash extensions damage your natural lashes? </h3>
               <h5> • Do not wash eyes, swim, or shower for 12 24 hours after lash extension application </h5>
               <h5> • Avoid oil-based makeup products, including mascara and eye-makeup remover </h5>
               <h5> • Refrain from rubbing your eyes </h5>
            </div>
     </body>
    )
}

export default LashExtensions;