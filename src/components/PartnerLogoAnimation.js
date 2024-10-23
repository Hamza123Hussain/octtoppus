import React, { useState, useEffect } from 'react';
import './css/PartnerLogoAnimation.css';
import { backendUrl, companiesLogoURL } from "../Datasets/data";

const PartnerLogoAnimation = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0); // Index of current logo to display

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment current logo index with wrap-around
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % companiesLogoURL.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const loopCount = () => {
    return 3; // Laptop and larger
  };

  return (
    <div className="logo-animation-container">
      <h2>Our Clients</h2>
      <div className='la-flex'>
      {[...Array(loopCount()).keys()].map((i) => (
        <div className='la-flex-item' key={i}>
          {companiesLogoURL.map((logo, index) => (
            <a key={index + i * 100} href={logo.link} target='_blank'>
              <img
                key={index + i * 100}
                src={backendUrl + logo.url}
                alt={logo.alt}
                className={`company-logo ${logo.url === 'images/logos/white/PF-LOGO.png' ? 'pf-logo': ''}`}
                style={{
                  opacity: currentLogoIndex === (index + i * 3) % companiesLogoURL.length ? 1 : 0, // Set opacity based on current logo
                  transition: 'opacity 0.3s ease, transform 0.7s cubic-bezier(.47,1.64,.41,.8)', // Add opacity transition effect
                  transitionDelay: `${0.4 * i}s, ${0.4 * i}s`,
                  margin: '0', // Center logos horizontally
                  objectFit: 'contain',
                  position: 'absolute',
                  transform: currentLogoIndex === (index + i * 3) % companiesLogoURL.length ? 'translateY(-50%)' : currentLogoIndex === (index + (i * 3) + 1) % companiesLogoURL.length ? 'translateY(-150%)' : 'translateY(100%)',
                  top: 0,
                  left: 0,
                }}
              />
            </a>
          ))}
        </div>
      ))}

      </div>
    
    </div>
  );
};

export default PartnerLogoAnimation;
