import React, { useState } from 'react';
import { auth, db } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import './SignUp.css';
const SignUp = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleRegister = async e => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
      });
      window.location.href = '/login';
    } catch (error) {
      alert('Registration Failed: ' + error.message);
    }
  };
  return (
    <form className="signup-form" onSubmit={handleRegister}>
      <h2>Sign Up</h2>
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};
export default SignUp;