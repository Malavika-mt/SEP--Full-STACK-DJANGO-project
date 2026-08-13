import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setCreds({ ...creds, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e && e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api-token-auth/', creds);
      const token = res.data.token;
      localStorage.setItem('userToken', token);
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      setMessage('Login successful');
    } catch (err) {
      const info = err?.response?.data || err.message;
      setMessage('Invalid credentials');
      console.error('Login error:', info);
    }
  };

  return (
    <div className="login-page" style={{ maxWidth: 420, margin: '0 auto', padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'grid', gap: 12 }}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={creds.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>

        {message && <p style={{ color: message.includes('Invalid') ? 'red' : 'green' }}>{message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
