import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ResultPage from './components/ResultPage';
import ProfilePage from './components/ProfilePage';
import HomeworkPage from './components/HomeworkPage';
import ScheduleBox from './components/ScheduleBox';
import Indextest from './components/test/indextest';
import Runningtest from './components/test/runningtest'; // Correct import
import SHhelper from './components/SH/SHhelper'; 
import Quadratic from './components/SH/Quadratic'; 
import Trig from './components/SH/Trig'; 
import Log from './components/SH/Log'; 
import UnitConv from './components/SH/UnitConv'; 
import Note from './components/note/note'; // Import the Note component
import { Navigate } from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/schedule" />} />
        <Route path="/schedule" element={<ScheduleBox />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/homework" element={<HomeworkPage />} />
        <Route path="/test/indextest" element={<Indextest />} /> 
        <Route path="/test/runningtest/:test_id" element={<Runningtest />} />
        <Route path="/shhelper" element={<SHhelper />} />
        <Route path="/sh/quadratic" element={<Quadratic />} /> 
        <Route path="/sh/trigonometric" element={<Trig />} /> 
        <Route path="/sh/logarithm" element={<Log />} /> 
        <Route path="/sh/unitconversion" element={<UnitConv />} /> 
        <Route path="/note" element={<Note />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
