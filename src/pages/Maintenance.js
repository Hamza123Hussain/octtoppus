import React from "react";
import './css/Maintenance.css';
import OcttoppusLogo from "../components/OcttoppusLogo";
import { Helmet } from "react-helmet";


const Maintenance = () =>{

    return(
        <div className="maintenance-page">
            <Helmet>
                <title>Under Maintenance | Octtoppus</title>
            </Helmet>
            <div className="maintenance-container">
                <OcttoppusLogo  themeLight={true}/>
                <h1>We are working Right now!</h1>
                <p>Octtoppus is currently under Maintenance. Kindly visit Later.</p>
                <p>If you have any queries Email at: </p>
                <a href="mailto:shahzaib@octtoppus.com"> shahzaib@octtoppus.com</a>
                
            </div>
        </div>
    );

};

export default Maintenance;