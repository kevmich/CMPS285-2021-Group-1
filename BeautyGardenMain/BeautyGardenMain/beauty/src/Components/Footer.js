import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="mainFooter">
            <div className="container">
                <div className="row">
                    {/*Column 1 */}
                    <div className="col">
                        <h4>The Beauty Garden Slidell</h4>
                        <ul className="list-unstyled">
                            <li>1325 Gause Boulevard Ste. E</li>
                            <li>Slidell, Louisiana 70458</li>
                        </ul>
                    </div>
                    {/*Column 2 */}
                    <div className="col">
                        <h4>Store Hours - By Appointment Only</h4>
                        <ul className="list-unstyled">
                            <li>Monday-Saturday: 9am-6pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="colSM">
                        &copy;{new Date().getFullYear()} The Beauty Garden Northshore - All Rights Reserved
                    </p>
                </div>
            </div>

        </div>
    )
    }
export default Footer;