import React, { useState, useEffect } from 'react';
import './ResultPage.css'; // Import CSS file for styling
import { FaWifi } from 'react-icons/fa';

const ResultPage = () => {
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/result');
        const data = await response.json();
        setTestResults(data);
      } catch (error) {
        console.error('Error fetching test results:', error);
      }
    };

    fetchTestResults();
  }, []);

  // Function to calculate percentage with negative marking
  const calculatePercentageWithNegativeMarking = (correctQuestions, incorrectQuestions, totalQuestions) => {
    const totalMarks = (correctQuestions * 4) - (incorrectQuestions);
    const percentage = (totalMarks / (totalQuestions * 4)) * 100;
    return percentage.toFixed(2);
  };

  // Function to calculate total marks
  const calculateTotalMarks = (test) => {
    const physicsMarks = ((test.physics_correct) * 4) - (test.physics_incorrect);
    const chemistryMarks = ((test.chemistry_correct) * 4) - (test.chemistry_incorrect);
    const botanyMarks = ((test.botany_correct) * 4) - (test.botany_incorrect);
    const zoologyMarks = ((test.zoology_correct) * 4) - (test.zoology_incorrect);
    return physicsMarks + chemistryMarks + botanyMarks + zoologyMarks;
  };

  // Function to calculate total percentage
  const calculateTotalPercentage = (totalMarks) => {
    return ((totalMarks / (180 * 4)) * 100).toFixed(2); // Assuming a total of 180 questions
  };

  return (
    <div className="test-results-container">
      <div className='test-results-container-div1'>
        <div className='test-results-container-div2'>
          <h2>All Test Results</h2>         
        </div>
        
      </div>
      {testResults.length > 0 ? (
        testResults.map((test, index) => (
          <div className="test-result" key={index}>
            {test.test_id === 8 ? (
              <h3>Major Test {test.test_id}</h3>
            ) : (
              <h3>Minor Test - 0{test.test_id}</h3>
            )}
            <div className="row">
              <div className="subject-info">
                <p>Physics:- <br /> Correct questions: {test.physics_correct} <br /> Incorrect Questions: {test.physics_incorrect} <br /> Left questions: {test.physics_left}<br/> Mark Obtained: {((test.physics_correct)*4)-(test.physics_incorrect)}</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${calculatePercentageWithNegativeMarking(test.physics_correct,test.physics_incorrect, 45)}%` }}>
                    <span>{calculatePercentageWithNegativeMarking(test.physics_correct,test.physics_incorrect, 45)}%</span>
                  </div>
                </div>
              </div>
              <div className="subject-info">
                <p>Chemistry:- <br /> Correct questions: {test.chemistry_correct} <br /> Incorrect Questions: {test.chemistry_incorrect} <br /> Left questions: {test.chemistry_left}<br/> Mark Obtained: {((test.chemistry_correct)*4)-(test.chemistry_incorrect)}</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${calculatePercentageWithNegativeMarking(test.chemistry_correct,test.chemistry_incorrect, 45)}%` }}>
                    <span>{calculatePercentageWithNegativeMarking(test.chemistry_correct,test.chemistry_incorrect, 45)}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="subject-info">
                <p>Botany:- <br /> Correct questions: {test.botany_correct} <br /> Incorrect Questions: {test.botany_incorrect} <br /> Left questions: {test.botany_left}<br/> Mark Obtained: {((test.botany_correct)*4)-(test.botany_incorrect)}</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${calculatePercentageWithNegativeMarking(test.botany_correct,test.botany_incorrect, 45)}%` }}>
                    <span>{calculatePercentageWithNegativeMarking(test.botany_correct,test.botany_incorrect, 45)}%</span>
                  </div>
                </div>
              </div>
              <div className="subject-info">
                <p>Zoology:- <br /> Correct questions: {test.zoology_correct} <br /> Incorrect Questions: {test.zoology_incorrect} <br /> Left questions: {test.zoology_left}<br/> Mark Obtained: {((test.zoology_correct)*4)-(test.zoology_incorrect)}</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${calculatePercentageWithNegativeMarking(test.zoology_correct,test.zoology_incorrect, 45)}%` }}>
                    <span>{calculatePercentageWithNegativeMarking(test.zoology_correct,test.zoology_incorrect, 45)}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='TMandTPWrapper'>
              <div className='TMandTP'>
                <p>Total Mark Obtained: {calculateTotalMarks(test)}</p>
              </div>
              <div className='TMandTP'>
                <p>Total Percentage: {calculateTotalPercentage(calculateTotalMarks(test))}%</p>
              </div>
              <div className='TMandTP'>
                <p>My Rank: {test.test_rank}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No test results available</p>
          <p>Check Your Internet Connection <FaWifi />!</p>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
