import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from "./2.JPG";
import logoBvc from './logoBvc.png';
import ClassListForTeacherDashboard from './ClassListForTeacherDashboard'
 
const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [showAllClasses, setShowAllClasses] = useState(false)
 
  const classes = [
    { id: '256332', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256333', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256334', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256335', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
  ];
 
  return (
<div style={{ position: "absolute", top: "100px", left: "100px", margin: "0px", padding: "0px" }}>
      {/* Header */}
<div className="headerStyle" style={{ display: "flex", justifyContent: "space-between", width: "1200px" }}>
<img style={{ width: "200px", height: "75px" }} src={logoBvc} alt="Logo" />
<div style={{ display: "flex" }}>
<img style={{ width: "50px", height: "50px" }} src={img} alt="Profile" />
<div>
            Melih Seyhan <br /> Teacher
</div>
</div>
</div>
 
      {/* NavBar */}
<div className="navbar" style={{ width: "150px", height: "400px", position: "relative", top: "50px" }}>
<ul style={{ listStyleType: "none", padding: "0px", margin: "0px" }}>
<li style={{ margin: "5px" }}>
<button onClick={() => setShowAllClasses(true)} style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>All Classes</button>
</li>
<li style={{ marginTop: "120px" }}>
<button onClick={() => navigate('/login')} style={{ backgroundColor: "white", width: "180px", height: "50px", borderRadius: "10px" }}>Logout</button>
</li>
</ul>
</div>
 
<div className="mainContent" style={{ position: "absolute", top: "165px", left: "250px" }}>
        {/* Class List */}



 {showAllClasses && <ClassListForTeacherDashboard/>}

<h1>Welcome to the Teacher Dashboard...</h1>
<h2 style={{ color: "blue" }}>Hit the Ground, Hard Working...</h2>
</div>

</div>
  );
};
 
export default TeacherDashboard;