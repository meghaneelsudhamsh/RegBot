// Login.js
import React, { useState } from 'react';
import './Login.css'; // Optional: For styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder logic for handling login (e.g., API call, validation)
    console.log(`Logging in with username: ${username} and password: ${password}`);
    // Reset form after handling login
    setUsername('');
    setPassword('');
  };

  return (
    <div>
        <img src="./images/loginbg.jpg" alt="Background" className="background-img" />
      <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
            </div>
  );
};

export default Login;
