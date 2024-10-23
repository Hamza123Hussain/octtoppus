// PageTransition.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './css/PageTransition.css';

const PageTransition = ({ children, ...props }) => {
  return (
    <CSSTransition {...props} classNames="transition" timeout={300}>
      {children}
    </CSSTransition>
  );
};

export default PageTransition;
