import React, { useState, useEffect, startTransition } from "react";
import axios from "axios";

const ClassesComponent = () => {
  const [courses, setCourses] = useState([]);
 const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [newClass, setNewClass] = useState({});
  const [editClass, setEditClass] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch teachers from the backend
  useEffect(() => {
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
    fetchTeachers();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://localhost:7025/api/Courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  },[]);

  

  useEffect(() => {
    fetchClasses();
  }, []);

  console.log(courses);
  
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

  const addClass = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7025/api/Classes",
        newClass
      );
      setClasses([...classes, response.data]);
      setNewClass({ });
    } catch (error) {
      console.error("Error adding class:", error);
    }
  };

  const updateClass = async (id) => {
    try {
      await axios.put(`https://localhost:7025/api/Classes/${id}`, editClass);
      setClasses(classes.map((cls) => (cls.id === id ? editClass : cls)));
      setEditClass(null);
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  const deleteClass = async (id) => {
    try {
      await axios.delete(`https://localhost:7025/api/Classes/${id}`);
      setClasses(classes.filter((cls) => cls.id !== id));
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Classes</h1>
      <table>
        <thead>
          <tr>
            <th style={{ padding: "13px" }}>Name</th>
            <th style={{ padding: "13px" }}>Start Date</th>
            <th style={{ padding: "13px" }}>End Date</th>
            <th style={{ padding: "13px" }}>Teacher Name</th>
            <th style={{ padding: "13px" }}>CourseName Name</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td style={{ padding: "20px" }}>{cls.name}</td>
              <td style={{ padding: "20px" }}>{cls.startDate}</td>
              <td style={{ padding: "20px" }}>{cls.endDate}</td>
              <td style={{ padding: "20px" }}>{cls.teacherName}</td>
              <td style={{ padding: "20px" }}>{cls.courseName}</td>
              <td style={{ display: "flex", gap: "10px", padding: "13px" }}>
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

      <h2>Add New Class</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newClass.name}
          onChange={(e) =>
            setNewClass({ ...newClass, name: e.target.value })
          }
        />


        <input
          type="text"
          placeholder="Start Date"
          value={newClass.startDate}
          onChange={(e) =>
            setNewClass({ ...newClass, startDate: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="End Date"
          value={newClass.endDate}
          onChange={(e) =>
            setNewClass({ ...newClass, endDate: e.target.value })
          }
        />
         {/* <input
            type="text"
            placeholder="Teacher Name"
            value={newClass.teacherName}
            onChange={(e) =>
              setEditClass({ ...newClass, teacherName: e.target.value })
            }
          /> */}
           <select name="teacherId" value={classes.teacherId}  onChange={(e) =>
              setNewClass({ ...newClass, teacherName: e.target.value })}>
          <option value="">Select a Teacher</option>
          {teachers.map(teacher => (
            <option key={teacher.id} value={`${teacher.firstName} ${teacher.lastName}`}>
              {teacher.firstName} {teacher.lastName}
            </option>
          ))}
        </select>

        <select name="courseId" value={classes.courseId}  onChange={(e) =>
              setNewClass({ ...newClass, courseName: e.target.value, name:e.target.value})}>
          <option value="">Select a Course</option>
          {courses.map(course => (
            <option key={course.id} value={`${course.name}`}>
              {course.name} 
            </option>
          ))}
        </select>
          

         
          
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "80px",
            borderRadius: "5px",
          }}
          onClick={addClass}
        >
          Create
        </button>
      </div>

      {editClass && (
        <div>
          <h2>Edit Class</h2>
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
            placeholder="Start Date"
            value={editClass.startDate}
            onChange={(e) =>
              setEditClass({ ...editClass, startTransition: e.target.value })
            }
          />
           <input
            type="text"
            placeholder="End Date"
            value={editClass.endDate}
            onChange={(e) =>
              setEditClass({ ...editClass, endDate: e.target.value })
            }
          />
           {/* <input
            type="text"
            placeholder="Teacher Name"
            value={editClass.teacherName}
            onChange={(e) =>
              setEditClass({ ...editClass, teacherName: e.target.value })
            }
          /> */}
          <select name="teacherId" value={classes.teacherId}  onChange={(e) =>
              setEditClass({ ...editClass, teacherName: e.target.value })}>
          <option value="">Select a Teacher</option>
          {teachers.map(teacher => (
            <option key={teacher.id} value={`${teacher.firstName} ${teacher.lastName}`}>
              {teacher.firstName} {teacher.lastName}
            </option>
          ))}
        </select>
          {/* <input
            type="text"
            placeholder="Course Name"
            value={editClass.courseName}
            onChange={(e) =>
              setEditClass({ ...editClass, courseName: e.target.value })
            }
          /> */}
          <select name="courseId" value={classes.courseId}  onChange={(e) =>
              setNewClass({ ...newClass, courseName: e.target.value, name:e.target.value})}>
          <option value="">Select a Course</option>
          {courses.map(course => (
            <option key={course.id} value={`${course.name}`}>
              {course.name} 
            </option>
          ))}
        </select>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "80px",
              borderRadius: "5px",
            }}
            onClick={() => updateClass(editClass.id)}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassesComponent;
