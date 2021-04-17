import React from "react";
import imageUpload from "./imageUpload";
import "./portfolio.css";
import MainButton from '../Buttons/MainButton';
import { Link } from 'react-router-dom';

const portfolio = () => {

    return (

        <body className="container">
            <div className="titleText"><h1>Our Work</h1></div>
            <div className="bodyContainer">
                *imported images*
            </div>
            <div>
                <Link className="uploadImageBtn" to="/image-upload">
                    <MainButton>
                        Click here to upload more images
                    </MainButton>
                </Link>
            </div>
        </body>

    )

}

export default portfolio;