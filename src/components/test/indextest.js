import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './indextest.css';

const Indextest = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tests'); // Assuming you have an API endpoint to fetch tests
      const data = await response.json();
      setTests(data);
    } catch (error) {
      console.error('Error fetching tests:', error);
    }
  };

  return (
    <div className='ipsumx'>
      <div className='guiufhfjj'>
        <h1 className="fhfxfxdsa">Available Tests</h1>
      </div>
       <div className='customnscfhh'>
         <p id='customffssh'>YOU CAN ALSO GIVE CUSTOM TEST</p>
       </div>
      {tests.map(test => (
        <div className='hewyryryor'>
            <div className="iofoioiioc" key={test.test_id}>
               <h2 className="hfhuhh-class">{test.test_name}</h2>
               <p className="test-class">Date: {test.test_date}</p>
               <p className="test-class">Duration: {test.duration_minutes+" min"}</p>
               <Link to={`/test/runningtest/${test.test_id}`}>
                  <button className="take-test-button">Take Test</button>
               </Link>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Indextest;
