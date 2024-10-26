import React, { useState, useEffect, useRef } from 'react'
import './css/AdvTextImage.css'
import LazyLoad from 'react-lazyload'

const AdvTextImage = ({ image, heading, paragraph, shadow = true }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isParagraphVisible, setIsParagraphVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setIsParagraphVisible(true), 300) // Delay for paragraph fade-in
        } else {
          setIsVisible(false)
          setIsParagraphVisible(false) // Reset on leaving view
        }
      },
      { threshold: 0.8 } // Fire callback when 80% of the section is visible
    )

    const currentRef = sectionRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    // Cleanup the observer on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div className="adv-main-container">
      <div
        className={`adv-container ${isVisible ? 'visible' : ''}`}
        ref={sectionRef}
        style={{
          backgroundImage: `url(${image})`,
          marginBottom: shadow ? '100px' : '0',
        }}
      >
        <LazyLoad height={700} offset={200}>
          <div className="adv-sub-container">
            <h2 className="adv-heading">{heading}</h2>
            <p
              style={{
                opacity: isParagraphVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out', // Inline transition style
              }}
            >
              {paragraph}
            </p>
          </div>
        </LazyLoad>
      </div>
      {shadow && (
        <>
          <div className="gradient g-up"></div>
          <div className="gradient g-down"></div>
        </>
      )}
    </div>
  )
}

export default AdvTextImage
