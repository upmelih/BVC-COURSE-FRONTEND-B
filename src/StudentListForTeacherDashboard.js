import React,{useEffect,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios'
 
const StudentList = () => {
  const navigate = useNavigate();
  const { classId } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  console.log(students);
  
  const fetchStudents = async () => {
    try {
      const response = await axios.get("https://localhost:7025/api/Students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };
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
<th style={{ padding: "13px" }}>Email</th>
<th style={{ padding: "13px" }}>phone</th>
<th style={{ padding: "13px" }}></th>
</tr>
</thead>
<tbody>
          {students.map((student) => (
<tr key={student.id}>
<td style={{ padding: "13px" }}>{student.id}</td>
<td style={{ padding: "13px" }}>{student.firstName}</td>
<td style={{ padding: "13px" }}>{student.lastName}</td>
<td style={{ padding: "13px" }}>{student.email}</td>
<td style={{ padding: "13px" }}>{student.phone}</td>
<td style={{ padding: "13px" }}>
<button
                  style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px" }}
                  onClick={() => navigate(`/student-details/${student.id}/${student.firstName}/${student.lastName}/${student.email}/${student.phone}`)}
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
