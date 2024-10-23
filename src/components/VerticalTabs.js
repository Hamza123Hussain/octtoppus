import React, { useState, useEffect } from 'react';
import './css/VerticalTabs.css'; // Assuming you have some CSS file for styling
// Import the Font Awesome CSS

const VerticalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handlePrevTab = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleNextTab = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const checkIfMobileView = () => {
    const mobileView = window.innerWidth < 768; // Example threshold for mobile view (adjust as needed)
    setIsMobileView(mobileView);
  };

  useEffect(() => {
    checkIfMobileView(); // Check initial viewport width
    window.addEventListener('resize', checkIfMobileView);

    return () => {
      window.removeEventListener('resize', checkIfMobileView);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const totalTabs = tabs.length;
  const activeTabIndex = activeTab !== null ? activeTab + 1 : 0; // Add 1 to make it 1-based index

  return (
    <div className={`vertical-tabs-container ${isMobileView ? 'mobile-view' : ''}`}>
      {isMobileView && (
        <div className='inline-heading-arrow'>
          <div className="toggle-prev" onClick={handlePrevTab}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <h4 className='mobile-tab-titles'>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`mobile-title ${activeTab === index ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: tab.name }}
              />
            ))}
          </h4>
          <div className="toggle-next" onClick={handleNextTab}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      )}

      {/* Tabs section */}
      <div className={`tabs ${isMobileView ? 'hidden' : ''}`}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      
      {/* Content section */}
      <div className="content">
        {tabs.map((tab, index) => (
          <div key={index} className={`tab-content ${activeTab === index ? 'active' : ''} ${tab.imagelink && 'tab-image-container'}`}>
            <p
              className='main-content'
              key={index}
              dangerouslySetInnerHTML={{ __html: tab.paragraph }}
            />
            {tab.imagelink && <img className={tab.izout ? 'zoom-out' : ''} src={tab.imagelink} alt={tab.name} />}
            {tab.imagedescription && <p className='image-description'>{tab.imagedescription}</p>}
          </div>
        ))}

      </div>

      {isMobileView && (
        <div className="tab-numbering">
          {activeTabIndex}/{totalTabs}
        </div>
      )}
    </div>
  );
};

export default VerticalTabs;
