import React from 'react';
import './TeethTreatments.css'
import teeth1 from '../images/teeth1.jpg';

const TeethTreatments = () => {
    return (
        <body className="Tbody">
            <div className ="TeethMainTitle">
                <h2>Teeth Treatments</h2>
            </div>

            <div className="TeethImages">

                <div className="TeethBoxes">
                <img className="teeth1" src={ teeth1 } alt="teeth1.jpg" />

                </div>

                <div className="TeethBoxes">
                    <h3>Cosmetic Teeth Whitening</h3>
                    <br></br>
                    <h5>With our all natural gel and LED light, 
                    your smile will whiten 4-9 shades in only 60-minutes! 
                    </h5>

                </div>

            
            </div>


            <div className="TeethTitles">
                <h2>Prices</h2>
            </div>

            <div className="TtableContainer">
                <div className="TrightPrice">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>90</h4>
                <br></br>
                <h4>50</h4>

                </div>

                <div className="TleftPrice">
                <br></br>
                <h1 className="TeethPriceTitle">Cosmetic Teeth Whitening</h1>
                <br></br>
                <h4>60-minute session</h4>
                <br></br>
                <h4>30-Minute Touchup Session</h4>

                </div>

            </div>

            <div className="TeethTitles">
                <h2>Frequently Asked Questions</h2>
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