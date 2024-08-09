import React, { useState, useEffect } from "react";
import axios from "axios";

const TeachersComponent = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ name: "", subject: "" });
  const [editTeacher, setEditTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  console.log(teachers);
  

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("https://localhost:7025/api/Teachers");
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    } finally {
      setLoading(false);
    }
  };

  const addTeacher = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7025/api/Teachers",
        newTeacher
      );
      setTeachers([...teachers, response.data]);
      setNewTeacher({ name: "", subject: "" });
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  const updateTeacher = async (id) => {
    try {
      await axios.put(`https://localhost:7025/api/Teachers/${id}`, editTeacher);
      setTeachers(teachers.map((teacher) => (teacher.id === id ? editTeacher : teacher)));
      setEditTeacher(null);
    } catch (error) {
      console.error("Error updating teacher:", error);
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`https://localhost:7025/api/Teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Teachers</h1>
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
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td style={{ padding: "13px" }}>{teacher.firstName}</td>
              <td style={{ padding: "13px" }}>{teacher.lastName}</td>
              <td style={{ padding: "13px" }}>{teacher.email}</td>
              <td style={{ padding: "13px" }}>{teacher.phone}</td>
              <td style={{ display: "flex", gap: "10px", padding: "13px" }}>
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    width: "80px",
                    borderRadius: "5px",
                  }}
                  onClick={() => deleteTeacher(teacher.id)}
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
                  onClick={() => setEditTeacher(teacher)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Teacher</h2>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={newTeacher.firstName}
          onChange={(e) => setNewTeacher({ ...newTeacher, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newTeacher.lastName}
          onChange={(e) => setNewTeacher({ ...newTeacher, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newTeacher.email}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, email: e.target.value })
          }
        />
         <input
          type="text"
          placeholder="Phone"
          value={newTeacher.phone}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, phone: e.target.value })
          }
        />
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "80px",
            borderRadius: "5px",
          }}
          onClick={addTeacher}
        >
          Create
        </button>
      </div>

      {editTeacher && (
        <div>
          <h2>Edit Teacher</h2>
          <input
            type="text"
            placeholder="First Name"
            value={editTeacher.firstName}
            onChange={(e) =>
              setEditTeacher({ ...editTeacher, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={editTeacher.lastName}
            onChange={(e) =>
              setEditTeacher({ ...editTeacher, lastName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={editTeacher.email}
            onChange={(e) =>
              setEditTeacher({ ...editTeacher, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            value={editTeacher.phone}
            onChange={(e) =>
              setEditTeacher({ ...editTeacher, phone: e.target.value })
            }
          />
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "80px",
              borderRadius: "5px",
            }}
            onClick={() => updateTeacher(editTeacher.id)}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default TeachersComponent;
