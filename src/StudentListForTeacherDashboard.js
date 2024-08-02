import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
 
const StudentList = () => {
  const navigate = useNavigate();
  const { classId } = useParams();
 
  const students = [
    { id: '25633215521145', firstName: 'Numan', lastName: 'Mohammed', role: 'Student' },
    { id: '25633315521146', firstName: 'John', lastName: 'Doe', role: 'Student' },
    { id: '25633415521147', firstName: 'Jane', lastName: 'Smith', role: 'Student' },
    { id: '25633515521148', firstName: 'Alice', lastName: 'Johnson', role: 'Student' },
  ];
 
  return (
<div style={{ position: "absolute", top: "100px", left: "100px", margin: "0px", padding: "0px" }}>
<button
        onClick={() => navigate(-1)}
        style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px", margin: "20px" }}
>
        Go Back
</button>
<table>
<thead>
<tr>
<th style={{ padding: "13px" }}>ID</th>
<th style={{ padding: "13px" }}>First Name</th>
<th style={{ padding: "13px" }}>Last Name</th>
<th style={{ padding: "13px" }}>Role</th>
<th style={{ padding: "13px" }}></th>
</tr>
</thead>
<tbody>
          {students.map((student) => (
<tr key={student.id}>
<td style={{ padding: "13px" }}>{student.id}</td>
<td style={{ padding: "13px" }}>{student.firstName}</td>
<td style={{ padding: "13px" }}>{student.lastName}</td>
<td style={{ padding: "13px" }}>{student.role}</td>
<td style={{ padding: "13px" }}>
<button
                  style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px" }}
                  onClick={() => navigate(`/student-details/${student.id}/${student.firstName}/${student.lastName}`)}
>
                  Detail
</button>
</td>
</tr>
          ))}
</tbody>
</table>
</div>
  );
};
 
export default StudentList;
