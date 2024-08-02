import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const ClassList = () => {
  const navigate = useNavigate();
 
  
  const classes = [
    { id: '256332', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256333', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256334', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256335', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
  ];
 
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
<td style={{ padding: "13px" }}>{classItem.teacher}</td>
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