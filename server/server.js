// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'parthaneet123@',
  database: 'rauc'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('MySQL connected');
  }
});



// -------------------------------------------------------------------------

// Define the API endpoint to fetch a specific test by its ID
app.get('/api/tests/:testId', async (req, res) => {
  try {
    const testId = req.params.testId;
    const sql = 'SELECT * FROM tests WHERE test_id = ?'; // SQL query to select the test with the given ID
    db.query(sql, [testId], (err, results) => {
      if (err) {
        console.error('Error fetching test:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else if (results.length === 0) {
        // If no test is found with the given ID, return a 404 error
        res.status(404).json({ error: 'Test not found' });
      } else {
        // If a test is found, return it as JSON response
        res.json(results[0]);
      }
    });
  } catch (error) {
    console.error('Error fetching test:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Define the API endpoint to fetch tests
app.get('/api/tests', async (req, res) => {
  try {
    const sql = 'SELECT * FROM tests'; // Assuming tests table exists with test_id, test_name, test_date columns
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching tests:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.error('Error fetching tests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define the API endpoint to fetch test results
app.get('/api/result', async (req, res) => {
  try {
    const sql = 'SELECT * FROM mock_test_results';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching test results:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.error('Error fetching test results:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Define the API endpoint to fetch questions for a specific test by its ID
app.get('/api/questions/:testId', async (req, res) => {
  try {
    const testId = req.params.testId;
    const sql = 'SELECT * FROM questions WHERE test_id = ?'; // SQL query to select questions for the given test ID
    db.query(sql, [testId], (err, results) => {
      if (err) {
        console.error('Error fetching questions:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else if (results.length === 0) {
        // If no questions are found for the given test ID, return a 404 error
        res.status(404).json({ error: 'Questions not found' });
      } else {
        // If questions are found, return them as JSON response
        res.json(results);
      }
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// API endpoint to fetch homework for all subjects
app.get('/api/homework', (req, res) => {
  const sql = `
    SELECT * FROM physics
    UNION
    SELECT * FROM chemistry
    UNION
    SELECT * FROM botany
    UNION
    SELECT * FROM zoology
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
