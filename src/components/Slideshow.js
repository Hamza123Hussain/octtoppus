import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '@fortawesome/fontawesome-free';
import './css/Slideshow.css';

const SlideShow = () => {
  const buttonStyle = {
    'background-color': 'transparent',
    border: 'none',
    'font-size': '20px',
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><i className="fa-solid fa-circle-left"></i></button>,
    nextArrow:<button style={{ ...buttonStyle }}><i className="fa-solid fa-circle-right"></i></button>,
    transitionDuration: 500,
  }
    const images = [
        "http://localhost/test/images/bg-image-1.jpg",
        "http://localhost/test/images/bg-image-2.jpg",
        "http://localhost/test/images/bg-image-3.jpg",
     ];

    return (
        <Slide {...properties}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default SlideShow;