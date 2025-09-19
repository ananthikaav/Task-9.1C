import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="site-title">DEV@Deakin</span>
      </div>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="navbar-right">
        <Link to="/post" className="nav-link">Post</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
};
export default Navbar;