/**
 * AdvTextImage Component
 *
 * This component displays an image with overlaid text (heading and paragraph).
 * It features lazy loading and a fade-in animation when the component becomes visible in the viewport.
 *
 * Props:
 * @param {string} image - URL of the background image
 * @param {string} heading - Text for the heading
 * @param {string} paragraph - Text for the paragraph
 * @param {boolean} [shadow=true] - Whether to display shadow gradients
 *
 * Features:
 * 1. Lazy loading of content using react-lazyload
 * 2. Intersection Observer for detecting when the component is in view
 * 3. Fade-in animation when the component becomes visible
 * 4. Optional shadow gradients above and below the main content
 *
 * The component uses the Intersection Observer API to detect when it's visible in the viewport.
 * When 80% of the component is visible, it triggers a CSS animation to fade in the content.
 * The background image is set using inline styles, and the text is positioned over it.
 */
import React, { useState, useEffect, useRef } from 'react';
import './css/AdvTextImage.css';
import LazyLoad from 'react-lazyload';

const AdvTextImage = ({image, heading, paragraph, shadow=true}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.8 } // Fire callback when 80% of the section is visible
    );

    const currentRef = sectionRef.current; // Capture the ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup the observer on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
    <div className='adv-main-container'>
    <div className={`adv-container ${isVisible ? 'visible' : ''}`} ref={sectionRef} style={{backgroundImage: `url(${image})`, marginBottom: shadow ? '100px' :'0'}}>
        <LazyLoad height={700} offset={200}>
        <div className='adv-sub-container'>
            <h2 className='adv-heading'>
                {heading}
            </h2>
            <p className='adv-paragraph'>{paragraph}</p>
        </div>
        </LazyLoad>

    </div>
    {
      shadow ?
      <>
      <div className="gradient g-up"></div>
      <div className="gradient g-down"></div>
      </>
      :
      ''
    }

    </div>
  );
};

export default AdvTextImage;
