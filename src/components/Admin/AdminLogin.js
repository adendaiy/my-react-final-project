// src/components/Admin/AdminLogin.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Example login request (adjust according to your backend)
      const response = await axios.post('http://localhost:5000/admin/login', { email, password });
      if (response.data.success) {
        history.push('/admin/dashboard');
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('Login error', error);
      alert('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
