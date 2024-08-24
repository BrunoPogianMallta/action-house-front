import React from 'react';
import { Link } from 'react-router-dom';
import './SessionExpired.css'; 

const SessionExpired = () => {
  return (
    <div className="session-expired-container">
      <h1>Session Expired</h1>
      <p>Your session has expired. Please log in again to continue.</p>
      <Link to="/" className="login-link">Back to Login</Link>
    </div>
  );
};

export default SessionExpired;
