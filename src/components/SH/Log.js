// Log.js
import React, { useState } from 'react';
import Modal from './Modal';
import './Log.css';

const Log = () => {
  const [logValue, setLogValue] = useState('');
  const [antilogValue, setAntilogValue] = useState('');
  const [logResult, setLogResult] = useState('');
  const [antilogResult, setAntilogResult] = useState('');
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isAntilogModalOpen, setIsAntilogModalOpen] = useState(false);

  const handleLogChange = (event) => {
    setLogValue(event.target.value);
  };

  const handleAntilogChange = (event) => {
    setAntilogValue(event.target.value);
  };

  const solveLog = () => {
    const result = Math.log10(parseFloat(logValue)).toFixed(2);
    setLogResult(result);
    setIsLogModalOpen(true);
  };

  const solveAntilog = () => {
    const result = Math.pow(10, parseFloat(antilogValue)).toFixed(2);
    setAntilogResult(result);
    setIsAntilogModalOpen(true);
  };

  const handleCloseLogModal = () => {
    setIsLogModalOpen(false);
  };

  const handleCloseAntilogModal = () => {
    setIsAntilogModalOpen(false);
  };

  return (
    <div className="ioruuyYHh">
      <h2 className="uuyYHhH">Logarithm Solver</h2>
      <div>
        <input type="number" value={logValue} onChange={handleLogChange} placeholder="Enter value for logarithm" className="uuyYHhInput" />
        <button onClick={solveLog} className="uuyYHhBtn">Solve Logarithm</button>
      </div>
      <h2 className="uuyYHhH">Antilogarithm Solver</h2>
      <div>
        <input type="number" value={antilogValue} onChange={handleAntilogChange} placeholder="Enter value for antilogarithm" className="uuyYHhInput" />
        <button onClick={solveAntilog} className="uuyYHhBtn">Solve Antilogarithm</button>
      </div>

      <Modal
        isOpen={isLogModalOpen}
        onClose={handleCloseLogModal}
        title="Logarithm Result"
        content={`Logarithm of ${logValue} is ${logResult}`}
        modalClassName="fksJRHh"
      />
      <Modal
        isOpen={isAntilogModalOpen}
        onClose={handleCloseAntilogModal}
        title="Antilogarithm Result"
        content={`Antilogarithm of ${antilogValue} is ${antilogResult}`}
        modalClassName="fksJRHh"
      />
    </div>
  );
};

export default Log;
