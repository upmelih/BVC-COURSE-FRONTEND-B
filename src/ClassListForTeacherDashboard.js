
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, startTransition } from "react";
import axios from "axios";
 
const ClassList = () => {
  const navigate = useNavigate();
 
  
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchClasses();
  }, []);

  
  const fetchClasses = async () => {
    try {
      const response = await axios.get("https://localhost:7025/api/Classes");
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    } finally {
      setLoading(false);
    }
  };
 
  return (
<div>
<table>
<thead>
<tr>
<th style={{ padding: "13px" }}>Class ID</th>
<th style={{ padding: "13px" }}>Class Name</th>
<th style={{ padding: "13px" }}>Teacher Name</th>
<th style={{ padding: "13px" }}>Start Date</th>
<th style={{ padding: "13px" }}>End Date</th>
<th style={{ padding: "13px" }}></th>
<th style={{ padding: "13px" }}></th>
</tr>
</thead>
<tbody>
          {classes.map((classItem) => (
<tr key={classItem.id}>
<td style={{ padding: "13px" }}>{classItem.id}</td>
<td style={{ padding: "13px" }}>{classItem.name}</td>
<td style={{ padding: "13px" }}>{classItem.teacherName}</td>
<td style={{ padding: "13px" }}>{classItem.startDate}</td>
<td style={{ padding: "13px" }}>{classItem.endDate}</td>
<td style={{ padding: "13px" }}>
<button
                  style={{ backgroundColor: "black", color: "white", width: "80px", borderRadius: "5px" }}
                  onClick={() => navigate(`/class-details/${classItem.id}/${classItem.name}/${classItem.teacher}/${classItem.startDate}/${classItem.endDate}`)}
>
                  Detail
</button>
</td>
<td style={{ padding: "13px" }}>
<button
                   style={{ backgroundColor: "black", color: "white", width: "130px", borderRadius: "5px" }}
                  onClick={() => navigate(`/student-list/${classItem.id}`)}
>
                  List All Student
</button>
</td>
</tr>
          ))}
</tbody>
</table>
</div>
  );
};
 
export default ClassList;