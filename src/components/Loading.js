import React, { useState, useEffect } from "react";
import './css/Loading.css';
import { backendUrl } from "../Datasets/data";

const Loading = ({ children, fetchedData }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkChildrenLoaded = () => {
      const images = Array.from(document.getElementsByTagName('img'));
      const promises = images.map(image => {
        if (!image.complete) {
          return new Promise(resolve => {
            image.onload = resolve;
            image.onerror = resolve;
          });
        }
        return null;
      });
      Promise.all(promises).then(() => {
        setTimeout(() => {
          if (fetchedData === undefined || fetchedData === true) {
            setLoaded(true);
          }
        }, 200); // Delay for 200 milliseconds to ensure minimum duration
      });
    };

    checkChildrenLoaded();
  }, [children, fetchedData]);

  useEffect(() => {
    if (loaded) {
      setDisplay(true);
    }
  }, [loaded]);

  const loadingvideo = backendUrl + 'videos/loading.mp4';

  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className={`loading-overlay ${loaded ? 'hide' : ''} ${display ? 'display-none' : ''}`}>
        <video autoPlay loop muted playsInline >
          <source src={loadingvideo} type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
          {/* <div className="loading-content">
            <img
              src={loadingimage}
              alt="Loading Spinner"
              className="spinner"
            />
          </div> */}
      </div>
      {loaded && children}
    </>
  );
};

export default Loading;
