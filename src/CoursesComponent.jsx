import React, { useState, useEffect } from "react";
import axios from "axios";

const CoursesComponent = () => {
  const [classes, setClasses] = useState([]);
  const [newClass, setNewClass] = useState({ name: "", description: "" });
  const [editClass, setEditClass] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get("https://localhost:7025/api/Courses");
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log(classes);

  const addClass = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7025/api/Courses",
        newClass
      );
      setClasses([...classes, response.data]);
      setNewClass({ name: "", description: "" });
    } catch (error) {
      console.error("Error adding class:", error);
    }
  };

  const updateClass = async (id) => {
    try {
      await axios.put(`https://localhost:7025/api/Courses/${id}`, editClass);
      setClasses(classes.map((cls) => (cls.id === id ? editClass : cls)));
      setEditClass(null);
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  const deleteClass = async (id) => {
    try {
      await axios.delete(`https://localhost:7025/api/Courses/${id}`);
      setClasses(classes.filter((cls) => cls.id !== id));
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            
            <th style={{ padding: "13px" }}>Course Name</th>
            <th style={{ padding: "13px" }}>Course Description</th>
           
          
          </tr>
        </thead>
        <tbody>
            
        {classes.map((cls) => (<tr>
          <td style={{ padding: "13px" }} key={cls.id}>
            {cls.name} 
            </td>
            <td style={{ padding: "13px" }}>{cls.description}</td> 
            
            <td >
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "80px",
                borderRadius: "5px",
              }}
              onClick={() => deleteClass(cls.id)}
            >
              Delete
            </button>
            </td>
            <td >
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "80px",
                borderRadius: "5px",
              }}
              onClick={() => setEditClass(cls)}
            >
              Edit
            </button>
            </td>
            </tr>
        ))}
        
        </tbody>
      </table>

      <h2>Add New Courses</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newClass.name}
          onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newClass.description}
          onChange={(e) =>
            setNewClass({ ...newClass, description: e.target.value })
          }
        />
        <button style={{
                backgroundColor: "black",
                color: "white",
                width: "80px",
                borderRadius: "5px",
              }} onClick={addClass}>Add Class</button>
      </div>

      {editClass && (
        <div>
          <h2>Edit Courses</h2>
          <input
            type="text"
            placeholder="Name"
            value={editClass.name}
            onChange={(e) =>
              setEditClass({ ...editClass, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={editClass.description}
            onChange={(e) =>
              setEditClass({ ...editClass, description: e.target.value })
            }
          />
          <button style={{
                backgroundColor: "black",
                color: "white",
                width: "80px",
                borderRadius: "5px",
              }} onClick={() => updateClass(editClass.id)}>
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursesComponent;
