// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/auth/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

import Header from "./components/content/header";
import Image from "./components/content/image";
import Articles from "./components/content/articles";
import Tutorial from "./components/content/tutorial";
import Subscription from "./components/content/subscription";
import Footer from "./components/content/footer";

import { auth } from './config/firebase';
import { signOut } from 'firebase/auth';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);      
      navigate('/login');       
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed: ' + error.message);
    }
  };

  const showNavbarOn = ['/login']; 

  return (
    <>
      {showNavbarOn.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <>
              <Header onLogout={handleLogout} />
              <Image />
              <Articles />
              <Tutorial />
              <Subscription />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
