import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollToScale = ({ children, initialScale, finalScale, delay = 0, origin = 'center center' }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    const currentElementRef = elementRef.current; // Store elementRef.current in a variable

    if (currentElementRef) {
      observer.observe(currentElementRef);
    }

    return () => {
      if (currentElementRef) {
        observer.unobserve(currentElementRef);
      }
    };
  }, []); // Dependency array is empty because we only need to run this effect once

  return (
    <div
      ref={elementRef}
      style={{
        transition: 'transform 1s cubic-bezier(.47,1.64,.41,.8)',
        transform: isVisible ? `scale(${finalScale})` : `scale(${initialScale})`,
        transformOrigin: origin, // Corrected usage of origin variable
        transitionDelay: delay + 'ms',
      }}
      className='Scroll-to-scale-container'
    >
      {children}
    </div>
  );
};

ScrollToScale.propTypes = {
  children: PropTypes.node.isRequired,
  initialScale: PropTypes.number.isRequired,
  finalScale: PropTypes.number.isRequired,
};

export default ScrollToScale;
