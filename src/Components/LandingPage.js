// LandingPage.js
import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-container">
      <img src="./images/ldbg.jpg" alt="Background" className="background-img" />
      <div className="landing-content">
        <h1>Welcome to the Registration Department</h1>
        <p>Your one-stop solution for property registration, stamp duty information, marriage registration, market value inquiries, and more.</p>
        <div className="button-group">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
