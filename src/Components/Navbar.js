// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home" className="navbar-logo">
          <img src="./images/logo.jpg" alt="Logo" className="logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/home">
              <i className="bi bi-house-fill"></i>
            </Link>
          </li>
          <li>
            <Link to="/chatbot"><i className="bi bi-robot"></i>-Bot</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">
          <Link to="/login">Login</Link>
        </button>
        <button className="navbar-button">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
