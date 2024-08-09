import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import ForgotPassword from './ForgotPassword';


import AdminDashboard from './AdminDashborad';
import StudentDashboard from './StudentDasboard';
import Details from './Details';
import EnrollmentConfirmation from './EnrollmentConfirmation'
import EnrollmentSuccess from './EnrollmentSuccess'
import TeacherDashboard from './TeacherDashboard';
import StudentListForTeacherDashboard from "./StudentListForTeacherDashboard"
import StudentDetailsForTeacherDashboard from './StudentDetailsForTeacherDashboard'
import ClassDetailsForTeacherDashboard from './ClassDetailsForTeacherDashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/administrator" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student-list/:classId" element={<StudentListForTeacherDashboard />} />
        <Route path="/student-details/:id/:firstName/:lastName/:email/:phone" element={<StudentDetailsForTeacherDashboard />} />
        <Route path="/class-details/:id/:name/:teacher/:startDate/:endDate" element={<ClassDetailsForTeacherDashboard />} />
        <Route path="/details/:id/:name/:teacher/:startDate/:endDate" element={<Details />} />
        <Route path="/confirm-enrollment/:id/:name/:teacher/:startDate/:endDate" element={<EnrollmentConfirmation />} /> {/* Add the confirmation page route */}
        <Route path="/enrollment-success" element={<EnrollmentSuccess />} /> {/* Add the success page route */}
        
      </Routes>
    </Router>
  );
};

export default App;