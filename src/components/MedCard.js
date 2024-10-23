import React, { useState } from "react";
import "./css/MedCard.css";

const MedCard = ({iconClass, title, description, imageURL, imageAlt}) =>{
    const [hovering, sethovering] = useState(false);


    const handleMouseEnter = () =>{
        sethovering(true);
    }
    
    const handleMouseLeave = () =>{
        sethovering(false);

    }

    return(

        <div className={`med-card-container ${hovering ? 'hovering' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div className="med-text-container">
                <span className="flexbox"><i className={`inline-block fa-solid ${iconClass}`}></i><h5 className="inline-block med-heading">{title}</h5></span>
                <p>{description}</p>
            </div>
            {/* <img className={`med-card-image ${hovering ? 'hovering' : ''}`} src={imageURL} alt={imageAlt} /> */}

        </div>
    );

}


export default MedCard;