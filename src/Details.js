import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import img from "./2.JPG";
import logoBvc from "./logoBvc.png";

function Details() {
  const { id, name, teacher, startDate, endDate } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
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
      {/* Header */}
      <div
        className="headerStyle"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1200px",
        }}
      >
        <img style={{ width: "200px", height: "75px" }} src={logoBvc} alt="Logo" />
        <div style={{ display: "flex" }}>
          <img style={{ width: "50px", height: "50px" }} src={img} alt="Profile" />
          <div>
            Levi Zigza <br /> Student
          </div>
        </div>
      </div>
      {/* NavBar */}
      {/* <div
        className="navbar"
        style={{
          width: "150px",
          height: "400px",
          position: "relative",
          top: "50px",
        }}
      >
        <ul style={{ listStyleType: "none", padding: "0px", margin: "0px" }}>
          <li style={{ margin: "5px" }}>
            <button onClick={() => navigate('/')} style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>
              Dashboard
            </button>
          </li>
          <li style={{ margin: "5px" }}>
            <button onClick={() => navigate('/')} style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>
              Available Classes
            </button>
          </li>
          <li style={{ margin: "5px" }}>
            <button onClick={() => navigate('/')} style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>
              Enrolled Classes
            </button>
          </li>
          <li style={{ marginTop: "120px" }}>
            <button style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>
              Logout
            </button>
          </li>
        </ul>
      </div> */}

      <div
        className="mainContent"
        style={{
          position: "absolute",
          top: "165px",
          left: "25px",
        }}
      >
        <div>
          <h2>Class Details</h2>
          <p><strong>Class ID:</strong> {id}</p>
          <p><strong>Class Name:</strong> {name}</p>
          <p><strong>Class Teacher:</strong> {teacher}</p>
          <p><strong>Start Date:</strong> {startDate}</p>
          <p><strong>End Date:</strong> {endDate}</p>
          <button onClick={handleGoBack} style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px" }}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
