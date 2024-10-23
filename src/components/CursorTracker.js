import React, { Component } from 'react';
import './css/CursorTracker.css';

class CursorTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPosition: { x: 0, y: 0 },
    };
  }

  handleMouseMove = (e) => {
    const { sensitivity } = this.props;
    this.setState((prevState) => {
      // Calculate the new X coordinate
      const newX = prevState.cursorPosition.x - e.movementX * sensitivity;

      // Ensure the text stays within the page boundaries
      const maxX = window.innerWidth - 100; // Adjust 100 according to your text width
      const updatedX = Math.max(0, Math.min(newX, maxX));

      return {
        cursorPosition: {
          x: updatedX,
          y: prevState.cursorPosition.y,
        },
      };
    });
  };

  render() {
    const { cursorPosition } = this.state;
    const { text, link } = this.props;

    return (
      <div className="cursor-tracker" onMouseMove={this.handleMouseMove}>
        <a
          className="tracking-text"
          style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, transform: 'translate(-50%, -50%)' }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </div>
    );
  }
}

export default CursorTracker;
