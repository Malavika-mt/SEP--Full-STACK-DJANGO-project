import React from 'react';
//import { StudentCard } from '../components';
//import StudentList from '../components/StudentList';
import RegisterForm from '../components/RegistrationForm';
import LiveStudentlist from '../components/LiveStudentlist';
function StudentPage() {
  return (
    <div className="student-page">
      <h2>Student Dashboard</h2>

      

      <section>
        <h2>Students (Live from Django)</h2>
        <LiveStudentlist/>
      </section>

      <section>
        <h3>Registration</h3>
        <RegisterForm />
      </section>
    </div>
  );
}

export default StudentPage;
