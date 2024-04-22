// ProfilePage.jsx
import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [data, setData] = useState({
    PHYSICS: 80,
    CHEMISTRY: 70,
    BOTANY: 60,
    ZOOLOGY: 75,
  });

  return (
    <div className="nJSp">
      <div className="qWFr">
        <h1>Profile Page</h1>
      </div>
      <div className="uYHj">
        <div className="yTRd">
          <h2>SRI PARTHA PROTIM BHUYAN</h2>
          <p><strong>Date of Birth:</strong> 11.01.2007</p>
          <p><strong>Contact No:</strong> 6002277016</p>
          <p><strong>Email:</strong> upcs01681@gmail.com</p>
          <p><strong>Password:</strong> SISLL</p>
          <p><strong>Address:</strong> Ushapur Village, P.O Paraliguri, PIN: 785671, Sivasagar (ASSAM)</p>
          <div className="tGFd">
            <p><strong>Batch Name:</strong> DMN1M1</p>
            <p><strong>Batch Duration:</strong> 1 year (2023-2024)</p>
          </div>
        </div>
        <div className="sDLk">
          <img src="profile-picture.jpg" alt="no profile picture" />
        </div>
      </div>
      <div className="kJHg">
        <h3>Performance</h3>
        <div className="iUyT">
          {Object.keys(data).map((subject, index) => (
            <div className="rTqE" key={subject}>
              <div className="pOxR">{subject}</div>
              <div className="wQjH">
                <div className="cXzM" style={{ width: `${data[subject]}%` }}></div>
                <div className="bKmN">{data[subject]}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
