import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPoll, FaUser, FaBook, FaBars, FaAtlassian, FaPencilAlt } from 'react-icons/fa'; // Added FaPencilAlt icon for note
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <span className="icon">🚀</span> <span className="text">ALLEN DIGITAL</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/schedule"><FaHome /> Home</Link></li>
            <li><Link to="/result"><FaPoll /> Results</Link></li>
            <li><Link to="/profile"><FaUser /> Profile</Link></li>
            <li><Link to="/homework"><FaBook /> Homework</Link></li>
            <li><Link to="/shhelper"><FaAtlassian/> SH Helper</Link></li>
            <li><Link to="/note"><FaPencilAlt /> Notes</Link></li>
            <li>
              <Link to="/test/indextest">
                <span className="new-tag">upcoming</span> <FaBars/> Test
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
