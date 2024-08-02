import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllClassList = ({ searchQuery, handleDetailsClick }) => {
  const navigate = useNavigate();

  const classes = [
    { id: '256332', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256333', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256334', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
    { id: '256335', name: 'Full Stack Web', teacher: 'Shadman', startDate: '2024-06-07', endDate: '2024-06-07' },
  ];

  const filteredClasses = classes.filter(classItem =>
    classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    classItem.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    classItem.id.includes(searchQuery)
  );

  const handleEnroll = (classItem) => {
    navigate(`/confirm-enrollment/${classItem.id}/${classItem.name}/${classItem.teacher}/${classItem.startDate}/${classItem.endDate}`);
  };

  return (
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
        {filteredClasses.map((classItem) => (
          <tr key={classItem.id}>
            <td style={{ padding: "13px" }}>{classItem.id}</td>
            <td style={{ padding: "13px" }}>{classItem.name}</td>
            <td style={{ padding: "13px" }}>{classItem.teacher}</td>
            <td style={{ padding: "13px" }}>{classItem.startDate}</td>
            <td style={{ padding: "13px" }}>{classItem.endDate}</td>
            <td style={{ padding: "13px" }}>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "80px",
                  borderRadius: "5px",
                }}
                onClick={() => handleDetailsClick(classItem)}
              >
                Detail
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
                onClick={() => handleEnroll(classItem)}
              >
                Enroll
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllClassList;
