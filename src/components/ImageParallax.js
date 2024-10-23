import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { bg_image_4 } from '../Datasets/data';

const useParallax = () => {
  const ref = React.useRef(null);

  const handleProgressChange = (progress) => {
    if (ref.current) {
      // set progress to CSS variable
      ref.current.style.setProperty(
        "--progress",
        progress.toString()
      );
    }
  };

  return { ref, handleProgressChange };
};

const ImageParallax = () => {
  const { ref, handleProgressChange } = useParallax();

  return (
    <div>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <ParallaxProvider>
          <Parallax ref={ref} onProgressChange={handleProgressChange} tagOuter="figure">
            <img
              src={bg_image_4}
              alt="Parallax Image"
              style={{
                position: 'absolute',
                width: 'calc(100% * var(--progress))',
                height: 'auto',
                top: 0,
                left: 0,
                zIndex: -1,
                transform: 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              }}
            />
          </Parallax>
        </ParallaxProvider>
        <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)' }}>
          <h1>Your Text Here</h1>
          <p>Additional text can go here</p>
        </div>
      </div>
    </div>
  );
};

export default ImageParallax;
