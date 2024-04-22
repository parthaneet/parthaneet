// SHhelper.js

import React from 'react';
import { Link } from 'react-router-dom';
import './SHhelper.css'; // Import CSS file for SHhelper

const SHhelper = () => {
  return (
    <div className="sh-helper-container">
      <div className="sh-helper-content">
        <h1 className="sh-helper-title">YOU CAN USE ANY TOOL PRESENT ON THIS PAGE</h1>
        <p className="sh-helper-quote">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
        
        <div className="sh-helper-options">
          <div className="sh-helper-option">
            <h2>Quadratic Question Solver</h2>
            <Link to="/sh/quadratic"><button className="sh-helper-button">Go to Quadratic Solver</button></Link>
          </div>
          <div className="sh-helper-option">
            <h2>Trigonometric Question Solver</h2>
            <Link to="/sh/trigonometric"><button className="sh-helper-button">Go to Trigonometric Solver</button></Link>
          </div>
          <div className="sh-helper-option">
            <h2>Logarithm Question Solver</h2>
            <Link to="/sh/logarithm"><button className="sh-helper-button">Go to Logarithm Solver</button></Link>
          </div>
          <div className="sh-helper-option">
            <h2>Unit Conversion</h2>
            <Link to="/sh/unitconversion"><button className="sh-helper-button">Go to Unit Conversion Solver</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SHhelper;
