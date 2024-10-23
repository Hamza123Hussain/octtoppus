import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const MobileMenu = ({ mainMenuItem, mainMenuLink, dropdownItems, navigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const resetClickCount = () => {
    setClickCount(0);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleClick = (link, dropdownItems) => {
    setClickCount(prevClickCount => prevClickCount + 1);

    if (clickCount === 1 && dropdownItems === undefined) {
      navigate(link);
    } else {
      handleDropdownToggle();
    }

    if (clickCount === 2) {
      navigate(link);
    }
  };

  return (
    <div className='MobileMenuDiv' onClick={() => handleClick(mainMenuLink, dropdownItems)}>
      <li className='menu-list'>
        <div className={`MobileMenuItem ${dropdownItems ? 'has-dropdown' : ''}`}>
          {mainMenuItem}
          {dropdownItems && <i className={`m-arrow fa-solid fa-angle-down ${isDropdownOpen ? 'active' : ''}`}></i>}
        </div>
      </li>
      {dropdownItems && (
        <div className={`MobileDropdown ${isDropdownOpen ? 'active' : ''}`}>
          {dropdownItems.map((item, index) => (
            <Link key={index} to={item.link} className="mobiledropdown-item">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
