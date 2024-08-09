import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentsComponent = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", age: "" });
  const [editStudent, setEditStudent] = useState(null);
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

  const addStudent = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7025/api/Students",
        newStudent
      );
      setStudents([...students, response.data]);
      setNewStudent({ name: "", age: "" });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const updateStudent = async (id) => {
    try {
      await axios.put(`https://localhost:7025/api/Students/${id}`, editStudent);
      setStudents(
        students.map((student) => (student.id === id ? editStudent : student))
      );
      setEditStudent(null);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`https://localhost:7025/api/Students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th style={{ padding: "13px" }}>First Name</th>
            <th style={{ padding: "13px" }}>Last Name</th>
            <th style={{ padding: "13px" }}>Email</th>
            <th style={{ padding: "13px" }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td style={{ padding: "13px" }}>{student.firstName}</td>
              <td style={{ padding: "13px" }}>{student.lastName}</td>
              <td style={{ padding: "13px" }}>{student.email}</td>
              <td style={{ padding: "13px" }}>{student.phone}</td>
              <td style={{ display: "flex", gap: "10px", padding: "13px" }}>
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    width: "80px",
                    borderRadius: "5px",
                  }}
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    width: "80px",
                    borderRadius: "5px",
                  }}
                  onClick={() => setEditStudent(student)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Student</h2>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={newStudent.firstName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newStudent.lastName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, lastName: e.target.value })
          }
        />
         <input
          type="text"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) =>
            setNewStudent({ ...newStudent, email: e.target.value })
          }
        />
         <input
          type="text"
          placeholder="Phone"
          value={newStudent.phone}
          onChange={(e) =>
            setNewStudent({ ...newStudent, phone: e.target.value })
          }
        />
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "80px",
            borderRadius: "5px",
          }}
          onClick={addStudent}
        >
          Create
        </button>
      </div>

      {editStudent && (
        <div>
          <h2>Edit Student</h2>
          <input
            type="text"
            placeholder="First Name"
            value={editStudent.firstName}
            onChange={(e) =>
              setEditStudent({ ...editStudent, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={editStudent.lastName}
            onChange={(e) =>
              setEditStudent({ ...editStudent, lastName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={editStudent.email}
            onChange={(e) =>
              setEditStudent({ ...editStudent, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            value={editStudent.phone}
            onChange={(e) =>
              setEditStudent({ ...editStudent, phone: e.target.value })
            }
          />
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "80px",
              borderRadius: "5px",
            }}
            onClick={() => updateStudent(editStudent.id)}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentsComponent;
