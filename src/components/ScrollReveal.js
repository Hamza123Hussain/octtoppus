import React, { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({ children, revealThreshold = 100, delay = 0 }) => {
  const [reveal, setReveal] = useState(false);
  const elementRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setTimeout(() => {
            setReveal(true);
            observer.current.disconnect(); // Stop observing after reveal
          }, delay);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0, // Trigger when any part of the element comes into view
      rootMargin: `${revealThreshold}px 0px`, // Adjust trigger point with a threshold
    });

    if (element) {
      observer.current.observe(element);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [revealThreshold, delay]);

  return (
    <div ref={elementRef}>
      {React.cloneElement(children, {
        style: {
          ...children.props.style,
          opacity: reveal ? 1 : 0,
          transition: 'opacity 1s',
        },
      })}
    </div>
  );
};

export default ScrollReveal;
