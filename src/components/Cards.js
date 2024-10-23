/**
 * Cards Component
 *
 * This component renders a card-like UI element for displaying project information.
 *
 * Props:
 * - title: String - The title of the card
 * - info: String - Additional information or description
 * - link: String - Optional link to navigate to when expanding the card
 * - logos: Array - An array of logo objects to display on the card
 *
 * Features:
 * - Expandable content on click or hover
 * - Lazy loading for improved performance
 * - Displays multiple technology logos with optional names
 * - Responsive design with CSS animations
 *
 * The component uses React hooks (useState) to manage the expanded state.
 * It also utilizes react-router-dom for navigation and react-lazyload for performance optimization.
 */
import React, { useState } from "react";
import "./css/Cards.css";
import { Link } from "react-router-dom";
import { backendUrl } from "../Datasets/data";
import LazyLoad from "react-lazyload";

const Cards = ({ title, info, link, logos }) => {
  const [expandClick, setExpandClick] = useState(false);

  const handleMouseLeave = () => {
    setExpandClick(false);
  };

  const handleExpandClick = () => {
    setExpandClick(true);
  };

  return (
    <LazyLoad offset={300} height={470}>
      <div className="Card-box" onMouseLeave={handleMouseLeave}>
        <div className="card-data">
          {/* <h5 className={`Card-category ${expandClick ? 'clicked' : ''}`}>{category}</h5> */}
          <h3 className={`Card-title ${expandClick ? "clicked" : ""}`}>
            {title}
          </h3>
          <p className={`Card-info ${expandClick ? "clicked" : ""}`}>{info}</p>
          <div
            className={`Card-logo-container  ${expandClick ? "clicked" : ""}`}
          >
            {logos &&
              logos.map((logo, index) => (
                <div className="logo-section" key={logo.alt}>
                  <img
                    className="logo-item"
                    width={logo.big ? 45 : 30}
                    height={logo.big ? 45 : 30}
                    key={logo.alt}
                    src={backendUrl + "images/language-logos/ico/" + logo.link}
                    alt={logo.alt}
                  />
                  {logo.name && <p className="logo-name">{logo.name}</p>}
                </div>
              ))}
          </div>
        </div>
        {link ? (
          <Link className="Card-link" to={link}>
            Expand <i className="chevron-r fa-solid fa-chevron-right"></i>
          </Link>
        ) : (
          <div className="Card-link" onClick={handleExpandClick}>
            Expand <i className="chevron-r fa-solid fa-chevron-right"></i>
          </div>
        )}
      </div>
    </LazyLoad>
  );
};

export default Cards;
