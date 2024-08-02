import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student'); 

  const handleLoginClick = (e) => {
    e.preventDefault();

    // Mock logic to navigate based on role selection
    if (role === 'Student') {
      navigate('/student');
    } else if (role === 'Teacher') {
      navigate('/teacher');
    } else if (role === 'Administrator') {
      navigate('/administrator');
    } else {
      alert('Invalid role selected');
    }
  };

  const handleReturnClick = () => {
    navigate('/');
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    navigate('/reset-password');
  };

  return (
    <div className="login-container">
      <img src="https://shorturl.at/Iallu" alt="Bow Valley College" className="logo" />
      <div className="login-box">
        <div className="login-form">
          <h1>Login</h1>
          <p>Use your email address for username</p>
          <form>
            <div className="input-group">
              <label>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-group">
              <label>I am a...</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option>Student</option>
                <option>Teacher</option>
                <option>Administrator</option>
              </select>
            </div>
            <div className="actions">
              <button type="submit" className="login-button" onClick={handleLoginClick}>Login</button>
              <button type="button" className="return-button" onClick={handleReturnClick}>Return to Landing Page</button>
              <a href="#" className="forgot-password" onClick={handleForgotPasswordClick}>Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;