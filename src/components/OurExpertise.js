import React from "react";
import "./css/OurExpertise.css";
import MedCard from "./MedCard";
import { OurExpertiseSection, backendUrl, card_carousel_default } from "../Datasets/data";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurExpertise = () =>{

    return(
        <div className="ourX-container">
            <div className="ourX-header-container">
                <h2>Our Expertise</h2>
                <p>Octtoppus demonstrates a strategic focus on innovation, which is evident in its commitment to exploring emerging technologies to offer a wide range of technology services, covering areas such as web design and development, Software Development, E-commerce Solutions, Digital Marketing, Cloud Solutions, and Business Consultancy.</p>
            </div>
                <Slider {...card_carousel_default}>
                {
                        OurExpertiseSection.map((data,index) =>(
                            <MedCard
                            key={index}
                            iconClass={data.iconclass}
                            title={data.title}
                            description={data.description}
                            imageURL={backendUrl + data.imageURL}
                            imageAlt={data.imageALT}
                            />
                        ))
                    }
                  </Slider>
        </div>
    );

}

export default OurExpertise;