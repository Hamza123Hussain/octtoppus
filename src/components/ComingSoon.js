import React from "react";
import { backendUrl } from "../Datasets/data";
// import OcttoppusLogo from "./OcttoppusLogo";
import MovingGradient from "./MovingGradient";

const ComingSoon = () =>{

    return(
        <div className="coming-soon-container" 
        style={{
            backgroundColor: 'black',
            height: '80dvh',
            
            backgroundImage: `url(${backendUrl}/images/dark-ocean.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
      
        >
            <div style={{height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
                <MovingGradient>
                    <h1 style={{ fontSize: '6em'}}>Coming Soon</h1>
                </MovingGradient>

            </div>


        </div>
    );
}

export default ComingSoon;