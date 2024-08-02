import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
 
const ClassDetails = () => {
  const { id, name, teacher, startDate, endDate } = useParams();
  const navigate = useNavigate();
 
  return (
<div style={{ position: "absolute", top: "100px", left: "100px", margin: "0px", padding: "0px" }}>
<h1>Class Details</h1>
<p><strong>Class ID:</strong> {id}</p>
<p><strong>Class Name:</strong> {name}</p>
<p><strong>Class Teacher:</strong> {teacher}</p>
<p><strong>Start Date:</strong> {startDate}</p>
<p><strong>End Date:</strong> {endDate}</p>
<button onClick={() => navigate(-1)} style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px" }}>Go Back</button>
</div>
  );
};
 
export default ClassDetails;