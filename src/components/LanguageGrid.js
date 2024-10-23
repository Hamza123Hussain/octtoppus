import React from "react";
import './css/LanguageGrid.css';
import { backendUrl, languageLogos } from "../Datasets/data";
import ScrollDirection from "./ScrollDirection";


const LanguageGrid = () =>{

    return(
        <div className="language-grid-container">
            <div className="lg-heading-container">
                <h2>Digital Ingenuity Tentacles</h2>
                <p>Witness the dynamic landscape where Octtoppus transforms visions into technological realities. Octtoppus skillfully intertwine these technologies into the very essence of its services, ensuring a tapestry of unparalleled excellence.</p>
            </div>
            <div className="lg-flex-box">
                <div className="lg-grid-container">
                    {languageLogos.map((data, index) =>(
                        <div key={index} className="lg-grid-item">
                            <ScrollDirection myclass='hover-scale' key={index} delay={30 * index} revealThreshold={100} direction="down">
                                <img className="grid-image" key={index} src={backendUrl + 'images/language-logos/' + data.imagelink} alt={data.imageALT} />
                            </ScrollDirection>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default LanguageGrid;