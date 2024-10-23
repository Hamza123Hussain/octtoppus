import React, { useState } from "react";
import './css/WhiteButton.css';

const WhiteButton = ({ name, link }) => {
    const [hovering, setHovering] = useState(false);

    const handleClick = () => {

        if(link){
            window.location.href = link;
        }
       
    }

    const handleMouseEnter = () => {
        setHovering(true);
    }

    const handleMouseLeave = () => {
        setHovering(false);
    }
    
    return (
        <button 
            className={`white-button ${hovering ? 'hovering' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {name}
        </button>
    );
};

export default WhiteButton;
