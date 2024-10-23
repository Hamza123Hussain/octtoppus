import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyLogo from '../components/OcttoppusLogo.js';
import MainMenu from './MainMenu.js';
import './Header.css';
import './Menu.css';
import { menuItemsWithLinks } from '../Datasets/data.js';
import Headroom from 'react-headroom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prevState => !prevState);
    setIsDropdownOpen(null);
  }, []);

  const handleDropdownToggle = useCallback((index) => {
    setIsDropdownOpen(prevState => (prevState === index ? null : index));
  }, []);

  const handleClick = useCallback((link, dropdownItems, index) => {
    if (dropdownItems) {
      if (isDropdownOpen === index) {
        navigate(link);
        handleMobileMenuToggle();
        setIsDropdownOpen(null);
      } else {
        setIsDropdownOpen(index);
      }
    } else {
      navigate(link);
      handleMobileMenuToggle();
    }
  }, [navigate, handleMobileMenuToggle, isDropdownOpen]);

  const handlePin = () =>{
    setIsSticky(true);
  }
  const handleUnpin = () =>{
    setIsSticky(false);
  }

  return (
    <div className="Zindex-container">
      <Headroom onPin={handlePin} onUnfix={handleUnpin}>
        <header className={`Main-header ${isSticky ? 'sticky' : ''}`}>
          <div className='header-logo'>
            <MyLogo navigate={navigate} isScrolledUp={isSticky} />
          </div>
          <div className='MainMenu'>
            {menuItemsWithLinks.map((menuItem, index) => (
              <MainMenu
                key={index}
                mainMenuItem={menuItem.mainMenuItem}
                mainMenuLink={menuItem.mainMenuLink}
                dropdownItems={menuItem.dropdownItems}
                sticky={isSticky}
                handleDropdownToggle={() => handleDropdownToggle(index)}
                handleClick={() => handleClick(menuItem.mainMenuLink, menuItem.dropdownItems, index)}
                isDropdownOpen={isDropdownOpen === index}
              />
            ))}
          </div>
          <div className='dropdown-button' onClick={handleMobileMenuToggle}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={`mobile-tab-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className='closeButtonContainer'>
              <i className="closeButton fa-solid fa-x" onClick={handleMobileMenuToggle}></i>
            </div>
            <div className='MobileMenuContainer'>
              {menuItemsWithLinks.map((menuItem, index) => (
                <div key={index + 100}>
                  <div key={index + 100} className='MobileMenuDiv' onClick={() => handleClick(menuItem.mainMenuLink, menuItem.dropdownItems, index)}>
                    <li className='menu-list'>
                      <div className={`MobileMenuItem ${menuItem.dropdownItems ? 'has-dropdown' : ''}`}>
                        {menuItem.mainMenuItem}
                        {menuItem.dropdownItems && <i className={`m-arrow fa-solid fa-angle-down ${isDropdownOpen === index ? 'active' : ''}`}></i>}
                      </div>
                    </li>
                  </div>
                  {menuItem.dropdownItems && (
                    <div className={`MobileDropdown ${isDropdownOpen === index ? 'active' : ''}`}>
                      {menuItem.dropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.link}
                          className="mobiledropdown-item"
                          onClick={handleMobileMenuToggle}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </header>
      </Headroom>
    </div>
  );
};

export default Header;
