import React, { useEffect, useState } from 'react';
import './css/HeroText.css';

const HeroText = ({ children, color }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(children.split(' '));
  }, [children]);

  const getRandomDelay = () => {
    return Math.floor(Math.random() * (100 - 0) + 0); // Generates a random number between 700 and 1500
  };

  return (
    <div className="text-container">
      {words.map((word, index) => (
        word === 'Octtoppus' ? (
          <div key={index} className="word nxt-ln">
            <span key={index} className="char" style={{ animationDelay: `${getRandomDelay()}ms` }}>
              <div className='purple-color-text'>{word}</div>
            </span>
          </div>
        ) : (
          <div key={index} className="word">
            <span key={index} className="char uppercase-text" style={{ animationDelay: `${getRandomDelay()}ms`, color: color ? color : '' }}>
              {word}
            </span>
          </div>
        )
      ))}
    </div>
  );
};

export default HeroText;
