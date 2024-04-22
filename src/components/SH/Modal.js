// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, content }) => {
  return (
    isOpen && (
      <div className="fgfcblcBLFL">
        <div className="zyokncWLsT">
          <div className="kfktfPVMDz">
            <h2>{title}</h2>
            <button onClick={onClose}>Close</button>
          </div>
          <div className="fBpcYmOBos">{content}</div>
        </div>
      </div>
    )
  );
};

export default Modal;

