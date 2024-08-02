import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "./2.JPG";
import logoBvc from "./logoBvc.png";
import AllClassList from "./AllClassList";
import EnrolledClassList from "./EnrolledClassList";

const StudentDashboard = () => {
  const [mangeAllClass, setManageAllClass] = useState(false);
  const [manageEnroalledClass, setManageEnrolledClass] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleAllListSelection = () => {
    setManageAllClass(true);
    setManageEnrolledClass(false);
  };

  const handleEnrolledListSelection = () => {
    setManageEnrolledClass(true);
    setManageAllClass(false);
  };

  const handleDetailsClick = (classDetails) => {
    navigate(`/details/${classDetails.id}/${classDetails.name}/${classDetails.teacher}/${classDetails.startDate}/${classDetails.endDate}`);
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
      <div
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
            <button onClick={handleAllListSelection} style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>
              Available Classes
            </button>
          </li>

          <li style={{ margin: "5px" }}>
            <button onClick={handleEnrolledListSelection} style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>
              Enrolled Classes
            </button>
          </li>

          <li style={{ marginTop: "120px" }}>
            <button onClick={()=> navigate('/login')} style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div
        className="mainContent"
        style={{
          position: "absolute",
          top: "165px",
          left: "250px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <form style={{ marginBottom: "50px" }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "80px",
                borderRadius: "5px",
              }}
            >
              Search
            </button>
          </form>
        </div>
        {/* Table Content Goes here */}
        {mangeAllClass && <AllClassList searchQuery={searchQuery} handleDetailsClick={handleDetailsClick} />}
        {manageEnroalledClass && <EnrolledClassList searchQuery={searchQuery} handleDetailsClick={handleDetailsClick} />}

        <h1>Welcome to the Student Dashboard...</h1>
        <h2 style={{ color: "blue" }}>Hit the Ground, Hard Working...</h2>
      </div>
    </div>
  );
};

export default StudentDashboard;
