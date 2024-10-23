import React, { useEffect } from 'react';

const TypeconsultForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
        <div data-tf-live="01HR46KMD46FZ6Y9WWPB8J2V8K"></div>
  );
};

export default TypeconsultForm;
