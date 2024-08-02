import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnrollmentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "absolute",
        top: "100px",
        left: "100px",
        margin: "0px",
        padding: "0px",
      }}
    >
      <h1>Enrollment Successful!</h1>
      <p>You have successfully enrolled in the class.</p>
      <button onClick={() => navigate('/student')} style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px" }}>Go Back to Dashboard</button>
    </div>
  );
};

export default EnrollmentSuccess;
