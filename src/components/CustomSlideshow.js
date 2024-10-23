import React, { useState } from 'react';
import './css/CustomSlideshow.css'; // Create a CSS file for styling

const CustomSlideshow = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="custom-slideshow-container">
      {articles.map((article, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${article.image})` }}
        >
          <div className="overlay">
            <h1 className="category">{article.category}</h1>
            <h2 className="heading">{article.heading}</h2>
            <a href={article.articleLink} className="learn-more-button">Learn More</a>
          </div>
        </div>
      ))}
      <div className="slide-indicators">
        {articles.map((article, index) => (
          <h3
            key={index}
            className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleSlideClick(index)}
          >
            {article.heading}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default CustomSlideshow;
