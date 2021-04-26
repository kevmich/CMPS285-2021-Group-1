import React from "react";
import './errorPage.css';
import { Link } from 'react-router-dom'

const errorPage = () => {
    return (
        <div className="content">
            <div className="title">
                <div className="errorTitle">
                    404 Page Not Found
                </div>
                <div className="dividerLine" />
                <div className="errorText">
                    Whoops, looks like that doesn't exist yet,
                    or you don't have permission to view that page...
                </div>
                <div className="dividerLine" />
                <div className="homeBtn">
                    <Link to="/" className="homeBtn">
                        Go back to the home page
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default errorPage;