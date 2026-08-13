import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('userToken');
    try {
      delete axios.defaults.headers.common['Authorization'];
    } catch (e) {
      // ignore
    }
  };

  return (
    <nav>
      <Link to="/about">About</Link> |
      <Link to="/">Home</Link> |
      <Link to="/courses">Courses</Link> |
      <Link to="/contact">Contact</Link> |
      <Link to="/students">Students</Link> |

      {/* Conditional UI based on auth */}
      {user ? (
        <>
          <span style={{ marginLeft: 8 }}>Welcome, {user.name || user.username}!</span>
          <button style={{ marginLeft: 8 }} onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;