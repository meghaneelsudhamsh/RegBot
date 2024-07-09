// Signup.js
import React, { useState } from 'react';
import './Signup.css'; // Optional: For styling

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder logic for handling signup (e.g., API call, validation)
    console.log(`Signing up with username: ${username}, email: ${email}, and password: ${password}`);
    // Reset form after handling signup
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <img src="./images/signupbg.jpg" alt="Background" className="background-img" />
      <div className="signup-container">
        <form onSubmit={handleSignup} className="signup-form">
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
