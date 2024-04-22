// HomeworkPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomeworkPage.css'; // Import CSS file for styling
import CandidateStats from './CandidateStats'; // Import CandidateStats component

function HomeworkPage() {
  const [homework, setHomework] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/homework');
        setHomework(response.data);
      } catch (error) {
        console.error('Error fetching homework:', error);
        setError(error.message);
      }
    };

    fetchHomework();
  }, []);

  // Sample values for accuracy, speed, and homeworkPercentage
  const accuracy = 90;
  const speed = "not defined";
  const homeworkPercentage = 80;

  // Function to format date strings to ddmmyy format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString(); 
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="homework-container">
      <div className='homework-container-div1'>
        <div className='homework-container-div2'>
          <h1 className="title">Homework Page</h1>
        </div>
      </div>
      <CandidateStats
        accuracy={accuracy}
        speed={speed}
        homeworkPercentage={homeworkPercentage}
      />
      {error && <p className="error">Error: {error}</p>}
      {homework.map((assignment) => (
        <div key={assignment.id} className="assignment-card">
          <h2 className="assignment-title">Homework Assignment</h2>
          <p><strong className="chapter">Chapter:</strong> {assignment.chapter}</p>
          <p><strong className="topic">Topic:</strong> {assignment.topic}</p>
          <p><strong className="content">Content:</strong> {assignment.content}</p>
          <p><strong className="assigned-date">Assigned Date:</strong> {formatDate(assignment.assigned_date)}</p>
          <p><strong className="due-date">Due Date:</strong> <span className="due-date-red">{formatDate(assignment.due_date)}</span></p>
        </div>
      ))}
    </div>
  );
}

export default HomeworkPage;
