import React, { useState, useEffect, useRef } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const MainMenu = ({ mainMenuItem, mainMenuLink, dropdownItems, sticky }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Use useRef to manage the timeout
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Use a constant for delay time
  };

  // Attach event listeners directly to dropdownRef
  useEffect(() => {
    const dropdownElement = dropdownRef.current;

    const handleMouseEnterDropdown = () => {
      clearTimeout(timeoutRef.current);
    };

    const handleMouseLeaveDropdown = () => {
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 300);
    };

    if (dropdownElement) {
      dropdownElement.addEventListener('mouseenter', handleMouseEnterDropdown);
      dropdownElement.addEventListener('mouseleave', handleMouseLeaveDropdown);
    }

    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener('mouseenter', handleMouseEnterDropdown);
        dropdownElement.removeEventListener('mouseleave', handleMouseLeaveDropdown);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <li className='menu-list'>
      {dropdownItems ? (
        <div
          ref={dropdownRef}
          className={`MenuItem ${isDropdownOpen ? 'has-dropdown active' : 'has-dropdown'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={mainMenuLink}>
            {mainMenuItem}
            <i className="arrow fa-solid fa-angle-down"></i>
          </Link>
        </div>
      ) : (
        <Link to={mainMenuLink} className="MenuItem">
          {mainMenuItem}
        </Link>
      )}
      {dropdownItems && (
        <div className={`dropdown ${isDropdownOpen ? 'active' : ''} ${sticky ? 'dropdown-sticky' : ''}`}>
          {dropdownItems.map((item, index) => (
            <Link to={item.link} key={index} className="dropdown-item">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default MainMenu;
