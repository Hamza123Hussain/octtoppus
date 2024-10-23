import React, { useState, useEffect } from 'react';
import './css/OcttoppusLogo.css'; // Import your CSS file for styling

const OcttoppusLogo = ({ isScrolledUp, navigate, themeLight }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  const handleHover = () => {
    setIsHovered(prevState => !prevState);
  };

  const handleClick = () => {
    const handleSmoothScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    if (window.location.pathname === '/') {
      handleSmoothScrollToTop();
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`logo-container ${isHovered || isSmallScreen || isScrolledUp ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="logo" onClick={handleClick}>
        <img width={'55px'} height={'55px'} className={`img-letter-o ${isHovered || isSmallScreen || isScrolledUp ? 'img-none' : ''}`} src={process.env.PUBLIC_URL + "/Octtoppus_o.png"} alt="Logo-O" />
       {/* <div className={`letter-o ${isHovered || isSmallScreen || isScrolledUp ? 'lowercase' : ''}`}>O</div> */}
        <div className="full-name">octtoppus</div>
        <div className={`dot ${themeLight ? 'light' : 'dark'}`}></div>
      </div>
    </div>
  );
};

export default OcttoppusLogo;
