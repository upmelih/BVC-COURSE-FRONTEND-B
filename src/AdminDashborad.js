import React, { useState } from "react";
import img from "./2.JPG";
import logoBvc from "./logoBvc.png";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import ClassesList from "./ClassesList";
import CourseList from "./CourseList";
import CreateStudent from "./CreateStudent";
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {

  const navigate = useNavigate();

  const [mangeTeacher, setManageTheacher] = useState(false);
  const [manageStudent, setManageStudent] =useState(false);
  const [manageClass, setManageClass] = useState(false);
  const [manageCourse, setManageCourse] = useState(false);
  const[manageCreateStudent, setManageCreatStudent]= useState(false)
 

  

  const handleCreateStudent =() =>{

    setManageCreatStudent(true)

    setManageTheacher(false)

    setManageStudent(false)
    setManageClass(false)
    setManageCourse(false)
  }


  const handleTeacherListSelection =() =>{

    setManageTheacher(true)

    setManageStudent(false)
    setManageClass(false)
    setManageCourse(false)
  }

  const handleStudentListSelection =() =>{

    setManageStudent(true)

    setManageTheacher(false)
    setManageClass(false)
    setManageCourse(false)
  }

  const handleClassListSelection =() =>{

    setManageClass(true)

    setManageStudent(false)
    setManageTheacher(false)
    setManageCourse(false)
  }

  const handleCourseListSelection = () =>{

   setManageCourse(true)

    setManageClass(false)
    setManageStudent(false)
    setManageTheacher(false)

  }


  

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
        <img style={{ width: "200px", height: "75px" }} src={logoBvc} />
        <div style={{ display: "flex" }}>
          <img style={{ width: "50px", height: "50px" }} src={img} />
          <div>
            Melih Seyhan <br /> Admin
          </div>
        </div>
      </div>
        {/* NavBar */}
      <div
        className="navbar"
        style={{
          //border: "solid, 1px, black",
          width: "150px",
          height: "400px",
          position: "relative",
          top: "50px",
        }}
      >
        <ul style={{listStyleType:"none", padding:"0px", margin:"0px"}}>
          <li style={{margin:"5px"}}>
            <button onClick={handleTeacherListSelection} style={{backgroundColor:"white", width:"180px", height:"50px", borderRadius:"10px"}}>Manage Teachers</button>
          </li>

          <li style={{margin:"5px"}} >
            <button onClick={handleStudentListSelection} style={{backgroundColor:"white", width:"180px", height:"50px", borderRadius:"10px"}}>Manage Students</button>
          </li>
          <li style={{margin:"5px"}}>
            <button onClick={handleCourseListSelection} style={{backgroundColor:"white", width:"180px", height:"50px",borderRadius:"10px"}}>Manage Courses</button>
          </li>
          <li style={{margin:"5px"}}>
            <button onClick={handleClassListSelection} style={{backgroundColor:"white", width:"180px", height:"50px",borderRadius:"10px"}}>Manage Classes</button>
          </li>
          <li style={{marginTop:"120px"}}>
            <button onClick={() => navigate('/login')} style={{backgroundColor:"white", width:"180px", height:"50px",borderRadius:"10px"}}>Logout</button>
          </li>
        </ul>
      </div>

      <div className="mainContent"
        style={{
          
          position: "absolute",
          top: "165px",
          left: "250px",
        }}
      >
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <form style={{ marginBottom: "50px" }}>
          <input type="text" />
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
        <button onClick={handleCreateStudent} style={{
              backgroundColor: "black",
              color: "white",
              width: "80px",
              height:"20px",
              borderRadius: "5px",
              marginLeft:"450px"
            }}>Create</button>
        
            
        

        </div>
          {/* Table Content Goes here */}
        
          
          {manageStudent && <StudentList/>}
          { mangeTeacher && <TeacherList/>}
          {manageClass && <ClassesList/>}
          {manageCourse && <CourseList/>}
          {manageCreateStudent && <CreateStudent/>}

          <h1 style={{}}> Welcome to the Admin Dashboard...</h1>
          <h2 style={{color:"blue"}}>Hit the Ground, Hard Working...</h2>
          
      </div>
    </div>
  );
};

export default AdminDashboard;
