import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
 
const StudentDetails = () => {
  const { id, firstName, lastName,email,phone } = useParams();
  const navigate = useNavigate();
 
  // Mock student details
  const studentDetails = {
    id,
    firstName,
    lastName,
    email,
    phone,
  };
 
  return (
<div style={{ position: "absolute", top: "100px", left: "100px", margin: "0px", padding: "0px" }}>
<h2>Student Details</h2>
<p><strong>Student ID:</strong> {studentDetails.id}</p>
<p><strong>First Name:</strong> {studentDetails.firstName}</p>
<p><strong>Last Name:</strong> {studentDetails.lastName}</p>
<p><strong>Email:</strong> {studentDetails.email}</p>
<p><strong>Phone Number:</strong> {studentDetails.phone}</p>
<button onClick={() => navigate(-1)} style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px" }}>Go Back</button>
</div>
  );
};
 
export default StudentDetails;