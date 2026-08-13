import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [creds, setCreds] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/token-auth/', creds);
      const token = res.data.token;
      localStorage.setItem('userToken', token);
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      alert('Login Successful!');
    } catch (err) {
      alert('Invalid Credentials');
      console.log(err?.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input name="username" placeholder="Username" onChange={handleChange} />
      <br />

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
