
import React, { useState } from 'react'
import UpdateStudent from './UpdateStudent'

const StudentList = () => {

  const[manageUpdateStudent, setManageUpdateStudent] = useState(false)
  const[manageDeleteStudent, setManageDeleteStudent] =useState(false)
  const[manageDetailStudent, setManageDetailStudent] = useState(false)


  const handleUpdateStudent = () =>{
    manageUpdateStudent(true)
    setManageDeleteStudent(false)
    setManageDetailStudent(false)
  }

  const handleDeleteStudent = () =>{
    manageUpdateStudent(false)
    setManageDeleteStudent(true)
    setManageDetailStudent(false)
  }


  const handleDetailStudent = () =>{
    manageUpdateStudent(false)
    setManageDeleteStudent(false)
    setManageDetailStudent(true)
  }




  return (
    
      
         
          <table>
         <thead>
           <tr>
             <th style={{ padding: "13px" }}>Student ID</th>
             <th style={{ padding: "13px" }}>First Name</th>
             <th style={{ padding: "13px" }}>Last Name</th>
             <th style={{ padding: "13px" }}>Role</th>
             <th style={{ padding: "13px" }}></th>
             <th style={{ padding: "13px" }}></th>
             <th style={{ padding: "13px" }}></th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td style={{ padding: "13px" }}>563225625</td>
             <td style={{ padding: "13px" }}>Numan</td>
             <td style={{ padding: "13px" }}>Mohommed</td>
             <td style={{ padding: "13px" }}>Student</td>
             <td style={{ padding: "13px" }}>
               <button
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Detail
               </button>
             </td>
             <td style={{ padding: "13px" }}>
               <button onClick={handleUpdateStudent}
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Edit
               </button>
             </td>
             <td style={{ padding: "13px" }}>
               <button
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Delete
               </button>
             </td>
           </tr>
           <tr>
             <td style={{ padding: "13px" }}>563225625</td>
             <td style={{ padding: "13px" }}>Numan</td>
             <td style={{ padding: "13px" }}>Mohommed</td>
             <td style={{ padding: "13px" }}>Student</td>
             <td style={{ padding: "13px" }}>
               <button
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Detail
               </button>
             </td>
             <td style={{ padding: "13px" }}>
               <button onClick={handleUpdateStudent}
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Edit
               </button>
             </td>
             <td style={{ padding: "13px" }}>
               <button
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Delete
               </button>
             </td>
           </tr>
           <tr>
             <td style={{ padding: "13px" }}>563225625</td>
             <td style={{ padding: "13px" }}>Numan</td>
             <td style={{ padding: "13px" }}>Mohommed</td>
             <td style={{ padding: "13px" }}>Student</td>
             <td style={{ padding: "13px" }}>
               <button
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Detail
               </button>
             </td>
             <td style={{ padding: "13px" }}>
               <button onClick={handleUpdateStudent}
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Edit
               </button>
             </td>
             <td style={{ padding: "13px" }}>
               <button
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Delete
               </button>
             </td>
           </tr>
           <tr>
             <td style={{ padding: "13px" }}>563225625</td>
             <td style={{ padding: "13px" }}>Numan</td>
             <td style={{ padding: "13px" }}>Mohommed</td>
             <td style={{ padding: "13px" }}>Student</td>
             <td style={{ padding: "13px" }}>
               <button
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Detail
               </button>
             </td>
             <td style={{ padding: "13px" }}>
               <button onClick={handleUpdateStudent}
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Edit
               </button>
             </td>
             <td style={{ padding: "13px" }}>
               <button
                 style={{
                   backgroundColor: "black",
                   color: "white",
                   width: "80px",
                   borderRadius: "5px",
                 }}
               >
                 Delete
               </button>
             </td>
           </tr>
         </tbody>
       </table>
   
  
  )
}

export default StudentList