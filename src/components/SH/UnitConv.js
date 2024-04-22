import React, { useState } from 'react';
import convert from 'convert-units';
import './UnitConv.css';

const ConversionApp = () => {
  const [fromValue, setFromValue] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('ft');
  const [toValue, setToValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const allUnits = convert().possibilities();

  const areUnitsCompatible = (from, to) => {
    let compatible = false;
    try {
      compatible = convert().from(from).possibilities().indexOf(to) !== -1 ||
        convert().from(to).possibilities().indexOf(from) !== -1;
    } catch {
      compatible = false;
    }
    return compatible;
  };
  

  const handleConversion = () => {
    if (!areUnitsCompatible(fromUnit, toUnit)) {
      setErrorMessage('Units are not compatible for conversion.');
      return;
    } else {
      setErrorMessage('');
    }
    
    if (isNaN(fromValue)) {
      setErrorMessage('Please enter a valid number.');
      return;
    } else {
      setErrorMessage('');
    }

    const result = convert(fromValue).from(fromUnit).to(toUnit);
    setToValue(result.toFixed(2));
  };

  return (
    <div className="poqugvbcku-container">
      <h2 className="poqugvbcku-heading">Unit Conversion</h2>
      <div className="poqugvbcku-input-group">
        <input
          className="poqugvbcku-input"
          type="number"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
        />
        <select className="poqugvbcku-select" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {allUnits.map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div className="poqugvbcku-input-group">
        <input className="poqugvbcku-input" type="text" value={toValue} readOnly />
        <select className="poqugvbcku-select" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {allUnits.map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <button className="poqugvbcku-button" onClick={handleConversion}>Convert</button>
      {errorMessage && <p className="poqugvbcku-error">{errorMessage}</p>}
    </div>
  );
};

export default ConversionApp;
