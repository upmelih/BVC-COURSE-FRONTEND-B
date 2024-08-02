// src/ForgotPassword.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <img src="https://shorturl.at/Iallu" alt="Bow Valley College" className="logo" />
      <div className="forgot-password-box">
        <h1>Forgot Password</h1>
        <p>Please enter your email address to reset your password</p>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" autocomplete="email" />
          </div>
          <div className="actions">
            <button type="button" className="return-button" onClick={handleReturnClick}>Return to Login</button>
            <button type="submit" className="reset-password-button">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
