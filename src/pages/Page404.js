import React from "react";
import "./css/404.css";
import { backendUrl } from "../Datasets/data";
import { Helmet } from "react-helmet";

const Page404 = () => {
    const imagelink = backendUrl + 'images/404.png';

    return (
        <div className="page-not-found">
            <Helmet>
                <title>404 - Page Not Found | Octtoppus </title>
            </Helmet>
            <h1>404 - Page Not Found</h1>
            <img src={imagelink} alt="Error 404" />
            <p>
                The page you are looking for has been either moved, removed or is temporarily down. For more information, contact the administration.
            </p>
        </div>
    );
}

export default Page404;
