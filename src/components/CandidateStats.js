// CandidateStats.js

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CandidateStats.css'; // Import CSS file for styling

const CandidateStats = ({ accuracy, speed, homeworkPercentage }) => {
  return (
    <div className="candidate-stats-container">
      <h2 className="candidate-stats-title">Candidate Statistics</h2>
      <div className="candidate-stats-item">
        <div className="circular-progressbar" style={{ width: '100px' }}> {/* Adjust the width for the radius */}
          <CircularProgressbar
            value={accuracy}
            text={`Accuracy`}
            strokeWidth={5} /* Adjust the strokeWidth to control the width of the line */
            styles={buildStyles({
              strokeLinecap: 'round',
              pathTransitionDuration: 1,
              pathColor: `url(#gradient-${accuracy})`,
              trailColor: '#f5f5f5',
              backgroundColor: '#3e98c7',
            })}
          />
          <svg>
            <linearGradient id={`gradient-${accuracy}`} x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8008" />
              <stop offset="100%" stopColor="#FFC837" />
            </linearGradient>
          </svg>
          <div className="percentage">{accuracy}%</div>
        </div>
      </div>
      
      <div className="candidate-stats-item">
        <div className="circular-progressbar" style={{ width: '100px' }}> {/* Adjust the width for the radius */}
          <CircularProgressbar
            value={speed}
            text={`Speed`}
            strokeWidth={5} /* Adjust the strokeWidth to control the width of the line */
            styles={buildStyles({
              strokeLinecap: 'round',
              pathTransitionDuration: 1,
              pathColor: `url(#gradient-${speed})`,
              trailColor: '#f5f5f5',
              backgroundColor: '#4CAF50',
            })}
          />
          <svg>
            <linearGradient id={`gradient-${speed}`} x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50" />
              <stop offset="100%" stopColor="#8BC34A" />
            </linearGradient>
          </svg>
          <div className="percentage">{speed}</div>
        </div>
      </div>
      
      <div className="candidate-stats-item">
        <div className="circular-progressbar" style={{ width: '100px' }}> {/* Adjust the width for the radius */}
          <CircularProgressbar
            value={homeworkPercentage}
            text={`Homework`}
            strokeWidth={5}
            styles={buildStyles({
              strokeLinecap: 'round',
              pathTransitionDuration: 1,
              pathColor: `url(#gradient-${homeworkPercentage})`,
              trailColor: '#f5f5f5',
              backgroundColor: '#FF5722',
            })}
          />
          <svg>
            <linearGradient id={`gradient-${homeworkPercentage}`} x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5722" />
              <stop offset="100%" stopColor="#FF9800" />
            </linearGradient>
          </svg>
          <div className="percentage">{homeworkPercentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default CandidateStats;
