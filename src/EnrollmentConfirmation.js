import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EnrollmentConfirmation = () => {
  const navigate = useNavigate();
  const { id, name, teacher, startDate, endDate } = useParams();

  const handleConfirmEnrollment = () => {
    // Add enrollment logic here (e.g., API call)
    navigate('/enrollment-success');
  };

  const handleCancel = () => {
    navigate('/student');
  };

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
      <h1>Confirm Enrollment</h1>
      <p>Are you sure you want to enroll in the following class?</p>
      <p><strong>Class ID:</strong> {id}</p>
      <p><strong>Class Name:</strong> {name}</p>
      <p><strong>Class Teacher:</strong> {teacher}</p>
      <p><strong>Start Date:</strong> {startDate}</p>
      <p><strong>End Date:</strong> {endDate}</p>
      <button onClick={handleConfirmEnrollment} style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px", marginRight: "10px" }}>Confirm</button>
      <button onClick={handleCancel} style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px" }}>Cancel</button>
    </div>
  );
};

export default EnrollmentConfirmation;
