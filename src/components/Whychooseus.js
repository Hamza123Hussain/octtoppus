import React from "react";
import './css/Whychooseus.css';
import XSCards from "./XSCards";
import { XScardsdata, backendUrl } from "../Datasets/data";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SixSteps from "./SixSteps";

const wcu_carousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: null,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: false,
    autoplaySpeed: 3000,
    touchMove: false,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            touchMove:true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            touchMove:true,
          }
        },
      ]
  };


const Whychooseus = () => { 

    return(
        <div className="wcu-container">
                <div className="heading-container">                   
                    <h2>Why Choose Octtoppus</h2>
                    <p>Because we are the one</p>
                </div>
                <div className="xs-cards-container">
                    <Slider {...wcu_carousel}>
                        {XScardsdata.map((data, index) =>(
                            <XSCards
                            key={index}
                            iconLink={backendUrl + "images/icons/" + data.iconLink}
                            title={data.title}
                            description={data.description}
                            />
                        ))}
                    </Slider>
                </div>
                <SixSteps />
                <div className="rsda-main-container">
                    <div className="rsda-container">
                        <div className="rsda-image">
                            <img src={backendUrl + 'images/icons/rs.png'} alt="Resilience and Sustainability" />
                        </div>
                        <div className="rsda-content">
                        <h4 className="rsda-hfour">Resilience and Sustainability</h4>
                        <p className="rsda-p">impact every component of the value chain</p>
                        </div>

                    </div>
                    <div className="rsda-container">
                        <div className="rsda-image">
                            <img src={backendUrl + 'images/icons/dai.png'} alt="Digital and AI" />
                        </div>
                        <div className="rsda-content">
                        <h4 className="rsda-hfour">Digital and AI</h4>
                        <p className="rsda-p">are enablers for E2E operations of the Future</p>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default Whychooseus;