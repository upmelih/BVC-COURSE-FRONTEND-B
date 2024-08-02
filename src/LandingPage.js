// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container">
      <img src="https://shorturl.at/Iallu" alt="Bow Valley College" className="logo" />
      <div className="message-container">
        <h1>Hit the Ground Succeeding!!!</h1>
        <p>In order to login the portal, please use college provided email</p>
        <button className="login-portal-button" onClick={handleLoginClick}>
          Login Portal
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
