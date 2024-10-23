import React from "react";
import ScrollReveal from "./ScrollReveal";
import './css/TextImageSection.css';
import { backendUrl } from "../Datasets/data";
import ScrollDirection from "./ScrollDirection";

function TextImageSection(props) {
    const { SectionID, Heading, Paragraph, ImageLink, Direction, FullImage,  imageSticky } = props;

    return (
        <div id={SectionID} className="ti-section-container">
            {Direction === "right" ? (
                <div className="ti-section ti-section-right">
                    <div className="ti-content">
                        <ScrollReveal revealThreshold={100} >
                            <h3>{Heading}</h3>
                        </ScrollReveal>
                        <div className="ti-line-divider"></div>
                        <div className="ti-paragraph" dangerouslySetInnerHTML={{ __html: Paragraph }}></div>
                    </div>
                    <ScrollDirection direction="right">
                        <div className={`ti-image-container ${FullImage ?  'full-image' : ''} ${imageSticky ? 'image-sticky' : ''}`}><img src={backendUrl + ImageLink} alt={Heading}/></div>
                    </ScrollDirection>
                </div>
            ) : (
                <div className="ti-section ti-section-left">
                    <ScrollDirection direction="left">
                        <div className={`ti-image-container ${FullImage ?  'full-image' : ''} ${imageSticky ? 'image-sticky' : ''}`}><img src={backendUrl + ImageLink} alt={Heading} /></div>
                    </ScrollDirection>
                    <div className="ti-content">
                        <ScrollReveal revealThreshold={100} >
                            <h3>{Heading}</h3>
                        </ScrollReveal>
                        <div className="ti-line-divider"></div>
                        <div className="ti-paragraph" dangerouslySetInnerHTML={{ __html: Paragraph }}></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TextImageSection;
