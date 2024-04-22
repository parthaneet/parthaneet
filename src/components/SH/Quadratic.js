import React, { useState } from 'react';
import './Quadratic.css'; // Import the CSS file

function QuadraticEquationSolver() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');

  const solveQuadratic = () => {
    // Split the input equation into parts
    const parts = equation.split(/\s*x\^?2\s*|\s*x\s*|\s*=\s*/).filter(Boolean);
    const a = parseFloat(parts[0]);
    const b = parseFloat(parts[1]);
    const c = parseFloat(parts[2]);

    // Calculate the discriminant
    const discriminant = b * b - 4 * a * c;

    // Initialize variables for solutions
    let solution1, solution2;

    // Check the nature of the discriminant
    if (discriminant > 0) {
      // Two real and distinct solutions
      solution1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      solution2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setResult(`Solution 1: ${solution1}, Solution 2: ${solution2}`);
    } else if (discriminant === 0) {
      // One real solution (repeated roots)
      solution1 = -b / (2 * a);
      setResult(`Repeated Solution: ${solution1}`);
    } else {
      // Complex solutions
      const realPart = (-b / (2 * a)).toFixed(2);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      setResult(`Solution 1: ${realPart} + ${imaginaryPart}i, Solution 2: ${realPart} - ${imaginaryPart}i`);
    }
  };

  return (
    <div className='cnohsoh'>
      <h2 className='aoryu'>Quadratic Equation Solver</h2>
      <input className='pamjry' type="text" value={equation} onChange={(e) => setEquation(e.target.value)} placeholder="Enter quadratic equation (ax^2 + bx + c = 0)" />
      <button className='mnasc' onClick={solveQuadratic}>Solve</button>
      <div className="ryhfnj">{result}</div>
    </div>
  );
}

export default QuadraticEquationSolver;

