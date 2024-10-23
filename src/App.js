// App.js
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import OcttoppusRouting from './OcttoppusRouting';
import './App.css';
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize('G-1M59L8V3DE');
  return (
      <OcttoppusRouting />
  );
}

export default App;
