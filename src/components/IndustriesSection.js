import React, { useState } from "react";
import "./css/IndustriesSection.css";
import { backendUrl, industry_data } from "../Datasets/data";

const IndustriesSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = (index) => {
    setSelectedItem(index);
  };

  const handleMouseLeave = () => {
    setSelectedItem(null);
  };

  return (
    <div className="accordion-container">
      <ul className="accordion">
        {industry_data.map((item, index) => (
          <li
            key={index}
            className={`item ${
              selectedItem !== null
                ? selectedItem === index
                  ? "animation"
                  : "blur"
                : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={backendUrl + item.ImageURL} alt={`Item ${index}`} />
            <h4 className="item-heading">{item.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndustriesSection;
