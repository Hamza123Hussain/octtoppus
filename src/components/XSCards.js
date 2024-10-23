import React from "react";
import './css/XSCards.css';

const XSCards = ({iconLink, title, description}) => {
    
    return(
        <div className="xs-card-container">
            
            <span className="ih-inline">
                <img src={iconLink} alt={title} />
                <h5>{title}</h5>
            </span>
            <p>{description}</p>
        </div>
    );
};

export default XSCards;
