/**
 * ScrollDirection Component
 *
 * This component creates a reveal animation effect for its child element based on scroll position.
 *
 * @param {ReactNode} children - The child element to be animated
 * @param {number} revealThreshold - The distance from the bottom of the viewport to trigger the reveal (default: 300)
 * @param {number} delay - The delay before the reveal animation starts (in milliseconds, default: 0)
 * @param {string} direction - The direction of the reveal animation ('left', 'right', 'up', 'down', default: 'left')
 * @param {string} myclass - Additional CSS class to be applied to the wrapper div
 *
 * The component works as follows:
 * 1. It wraps the child element in a div with a ref.
 * 2. It listens for scroll events and checks the position of the wrapped element.
 * 3. When the element is scrolled into view (based on revealThreshold), it triggers the reveal animation.
 * 4. The reveal animation translates the element from its initial hidden position to its final visible position.
 * 5. The direction of the initial translation is determined by the 'direction' prop.
 * 6. The component uses React hooks (useState, useEffect, useRef, useCallback) for state management and side effects.
 *
 * Note: The component removes the scroll event listener after the reveal to optimize performance.
 */

import React, { useState, useEffect, useRef, useCallback } from "react";

const ScrollDirection = ({
  children,
  revealThreshold = 300,
  delay = 0,
  direction = "left",
  myclass = "",
}) => {
  const [reveal, setReveal] = useState(false);
  const [directioncase, setDirectionCase] = useState("translateX(-100%)");
  const elementRef = useRef(null);

  const handleScroll = useCallback(() => {
    const elementPosition = elementRef.current.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > elementPosition + revealThreshold) {
      setTimeout(() => {
        setReveal(true);
        window.removeEventListener("scroll", handleScroll); // Optionally remove event listener after reveal
      }, delay);
    }
  }, [revealThreshold, delay]);

  useEffect(() => {
    switch (direction) {
      case "right":
        setDirectionCase("translateX(100%)");
        break;
      case "up":
        setDirectionCase("translateY(-100%)");
        break;
      case "down":
        setDirectionCase("translateY(100%)");
        break;
      case "left":
        setDirectionCase("translateY(-100%)");
        break;
      default:
        setDirectionCase("translateX(-100%)");
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, direction]);

  return (
    <div ref={elementRef} className={`scroll-direction ${myclass}`}>
      {React.cloneElement(children, {
        style: {
          ...children.props.style,
          opacity: reveal ? 1 : 0,
          transform: reveal ? "translateX(0) translateY(0)" : directioncase,
          transition:
            "opacity 1s ease, transform 1s cubic-bezier(.47,1.64,.41,.8)",
        },
      })}
    </div>
  );
};

export default ScrollDirection;
