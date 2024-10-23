import React from "react";
import './css/MovingGradient.css';

const MovingGradient = ({children}) =>{

    return(
        <span className="gradient-text">
            {children}
        </span>
    );


};

export default MovingGradient;