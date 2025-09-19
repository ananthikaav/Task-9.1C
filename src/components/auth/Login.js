import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleLogin = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      window.location.href = '/home';
    } catch (error) {
      alert('Login Failed: ' + error.message);
    }
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      <p style={{ marginTop: '15px' }}>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </form>
  );
};
export default Login;