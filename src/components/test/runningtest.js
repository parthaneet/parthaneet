import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './runningtest.css';

const RunningTest = () => {
  const [test, setTest] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const { test_id } = useParams();
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showQuestions, setShowQuestions] = useState(1); // Initially set to 1
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const fetchTestAndQuestions = async () => {
      try {
        // Fetch test details
        const testResponse = await fetch(`http://localhost:3000/api/tests/${test_id}`);
        const testJson = await testResponse.json();
        setTest(testJson);
   
        // Fetch questions for the test
        const questionsResponse = await fetch(`http://localhost:3000/api/questions/${test_id}`);
        const questionsJson = await questionsResponse.json();
        setQuestions(questionsJson);

        setLoading(false);
        setRemainingTime(testJson.duration_minutes * 60); // Convert minutes to seconds for timer
      } catch (error) {
        console.error('Error fetching test and questions:', error);
        setError('Failed to fetch test and questions. Please try again later.');
        setLoading(false);
      }
    };

    fetchTestAndQuestions();
  }, [test_id]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(countdownInterval);
          setShowQuestions(0); // When duration becomes 0, hide questions
          return 0;
        }
      });
    }, 1000); // Decrease the remaining time every second

    return () => clearInterval(countdownInterval);
  }, []);

  const handleOptionSelect = (questionId, selectedIndex) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [questionId]: selectedIndex
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach(question => {
      const selectedOptionIndex = selectedOptions[question.question_id];
      if (selectedOptionIndex !== undefined) {
        const correctOptionIndex = parseInt(question.correct_option.charCodeAt(0)) - 65;
        if (selectedOptionIndex === correctOptionIndex) {
          newScore += 4;
        } else {
          newScore -= 1;
        }
      }
    });
    return newScore;
  };

  useEffect(() => {
    setScore(calculateScore());
  }, [selectedOptions]);

  const handleFinishTest = () => {
    setSubmitted(true);
    const backButton = document.createElement('button');
    backButton.textContent = 'Back to Index Test'; // Set button text
    backButton.classList.add('back-button-gjtnwe'); // Add a class to the button for styling
    backButton.addEventListener('click', () => {
      <li><Link to="/shhelper"> SH Helper</Link></li>
    });
    const finishButtonSpace = document.querySelector('.finish-button-gjtnwe'); // Assuming only one element has this class
    finishButtonSpace.parentNode.appendChild(backButton); // Append the button to the parent of finishButtonSpace
  };  

  return (
    <div className="running-test-container-afekjg">
      {loading ? (
        <p className="loading-message-fdjwk">Loading test...</p>
      ) : error ? (
        <p className="error-message-kecwgt">Error: {error}</p>
      ) : test ? (
        <div className="test-details-yebhkc">
          <div className='test-details-header-egggkih'>
             <h1 className="test-name-ghjtmn">{test.test_name}</h1>
             <p className="test-date-nwejga">Date: {test.test_date}</p>
             <p className="time-left-djwhck">Time Left: {Math.floor(remainingTime / 60)} minutes {remainingTime % 60} seconds</p>
          </div>
          
          {showQuestions && !submitted && questions.length > 0 ? (
            <div className="question-container-hiinnwg">
              <h2 className="question-heading-utljrf">Questions</h2>
              {questions.map(question => (
                <div key={question.question_id} className="question-item-sgctkm">
                  <p className="question-text-qngkjw">{question.question_id > 185 ? question.question_id - 185 : question.question_id}. {question.question_text} </p>
                  <ul className="options-list-fthjne">
                    {[1, 2, 3, 4].map(optionIndex => (
                      <li key={optionIndex} className="option-item-fnhtwe">
                        <input
                          type="radio"
                          id={`option_${question.question_id}_${optionIndex}`}
                          name={`question_${question.question_id}`}
                          checked={selectedOptions[question.question_id] === optionIndex - 1}
                          onChange={() => handleOptionSelect(question.question_id, optionIndex - 1)}
                          className="option-input-ueyrnf"
                        />
                        <label htmlFor={`option_${question.question_id}_${optionIndex}`} className="option-label-kthdje">
                          {question[`option_${optionIndex}`]}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <button onClick={handleFinishTest} className="finish-button-gjtnwe">Finish Test</button>
            </div>
          ) : (
            <div className="score-container-rgtken">
              <p className="score-message-wjhgke">Your score: {score}</p>
            </div>
          )}
        </div>
      ) : (
        <p className="no-test-message-ygndkf">No test found</p>
      )}
    </div>
  );
};

export default RunningTest;