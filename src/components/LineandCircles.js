import React from 'react';
import './css/LineandCircles.css'

function LineandCircles() {
    const numCircles = 6; // Divide line into 6 equal parts
    // Calculate the position of each circle
    const circlePositions = [];
    for (let i = 1; i <= numCircles; i++) {
      circlePositions.push(100 / numCircles);
    }

    const CricleText = [
        
        {
            heading: 'Develop',
            caption: 'Optimize design to value',
        },
        {
            heading: 'plan',
            caption: 'Transform end-to-end planning',
        },
        {
            heading: 'Source',
            caption: 'Effectively source and manage suppliers',
        },
        {
            heading: 'Make',
            caption: 'Redesign and reduce cost in factories',
        },

        {
            heading: 'Deliver',
            caption: 'Redesign and realign logistics',
        },
        {
            heading: 'Service',
            caption: 'Optimize and support customer supply chain and initiatives',
        },
    ]
  
    return (
      <div className='lc-main'>
        {/* Render line */}
        <div className='lc-line'/>
  
        {/* Render circles */}
        {circlePositions.map((position, index) => (
          <div
          className='lc-circle'
            key={index}
            style={{
              left: (16.33 * index) + '%',
            }}
          />
        ))}
        
        {CricleText.map((data, index) => (
          <div
          className='lc-circle-text'
            key={index}
            style={{
              left: (16.33 * index) + '%',
            }}
          >
            <div className='ct-heading'>
                {data.heading}
            </div>
            <div className='ct-caption'>{data.caption}</div>
          </div>
        ))}
        <div className="ct-triangle"></div>
      </div>
    );
}

export default LineandCircles;