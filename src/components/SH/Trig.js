import React, { useState } from 'react';
import './Trig.css';

function TrigSolver() {
  const [angle, setAngle] = useState('');
  const [functionType, setFunctionType] = useState('sin');
  const [result, setResult] = useState(null);

  const handleAngleChange = (e) => {
    setAngle(e.target.value);
  };

  const handleFunctionChange = (e) => {
    setFunctionType(e.target.value);
  };

  const solveTrigFunction = () => {
    const radians = parseFloat(angle) * (Math.PI / 180); // Convert degrees to radians
    let trigResult;

    switch (functionType) {
      case 'sin':
        if (angle === '30') {
          trigResult = '1/2';
        } else if (angle === '45') {
          trigResult = '1/√2';
        } else if (angle === '60') {
          trigResult = '√3/2';
        } else {
          trigResult = Math.sin(radians);
        }
        break;
      case 'cos':
        if (angle === '30') {
          trigResult = '√3/2';
        } else if (angle === '45') {
          trigResult = '1/√2';
        } else if (angle === '60') {
          trigResult = '1/2';
        } else {
          trigResult = Math.cos(radians);
        }
        break;
      case 'tan':
        if (angle === '30') {
          trigResult = '1/√3';
        } else if (angle === '45') {
          trigResult = '1';
        } else if (angle === '60') {
          trigResult = '√3';
        } else {
          trigResult = Math.tan(radians);
        }
        break;
      case 'csc':
        if (angle === '30') {
          trigResult = '2';
        } else if (angle === '45') {
          trigResult = '√2';
        } else if (angle === '60') {
          trigResult = '2/√3';
        } else {
          trigResult = 1 / Math.sin(radians);
        }
        break;
      case 'sec':
        if (angle === '30') {
          trigResult = '2/√3';
        } else if (angle === '45') {
          trigResult = '√2';
        } else if (angle === '60') {
          trigResult = '2';
        } else {
          trigResult = 1 / Math.cos(radians);
        }
        break;
      case 'cot':
        if (angle === '30') {
          trigResult = '√3';
        } else if (angle === '45') {
          trigResult = '1';
        } else if (angle === '60') {
          trigResult = '1/√3';
        } else {
          trigResult = 1 / Math.tan(radians);
        }
        break;
      default:
        trigResult = null;
    }

    setResult(trigResult);
  };

  return (
    <div className='wgguwhwh'>
      <h2 className='ieiowiwhh'>Trigonometric Function Solver</h2>
      <div className='oihdjGF'>
        <label className='oyrcyyii'>
          Angle (degrees):
          <input className='shsjmzlisis' type="number" value={angle} onChange={handleAngleChange} />
        </label>
      </div>
      <div className='yrffgfgf'>
        <label className='yibyyiii'>
          Function:
          <select className='riyrrcyry' value={functionType} onChange={handleFunctionChange}>
            <option value="sin">sin</option>
            <option value="cos">cos</option>
            <option value="tan">tan</option>
            <option value="csc">csc</option>
            <option value="sec">sec</option>
            <option value="cot">cot</option>
          </select>
        </label>
      </div>
      <div id="y8rih">
        <button id ="pmydh"onClick={solveTrigFunction}>Calculate</button>
      </div>
      {result !== null && (
        <div id="ruibjfug">
          <p id="kayrvbh">Result: {result}</p>
        </div>
      )}
    </div>
  );
}

export default TrigSolver;
