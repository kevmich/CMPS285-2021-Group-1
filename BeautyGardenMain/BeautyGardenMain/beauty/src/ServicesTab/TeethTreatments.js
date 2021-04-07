import React from 'react';
import './TeethTreatments.css'
import teeth1 from '../images/teeth1.jpg';

const TeethTreatments = () => {
    return (
        <body>
            <div className ="TeethMainTitle">
                <h2>Teeth Treatments</h2>
            </div>

            <div className="TeethImages">
            <img className="teeth1" src={ teeth1 } alt="teeth1.jpg" />
            </div>


            <div className="TeethTitles">
                <h2>Prices</h2>
            </div>

            <div className="TtableContainer">
                <div className="TrightPrice">

                </div>

                <div className="TleftPrice">

                </div>

            </div>

            <div className="TeethTitles">
                <h2>FAQ</h2>
            </div>

            <div className="TTFAQ">

            </div>




















     </body>
    )
}

export default TeethTreatments;