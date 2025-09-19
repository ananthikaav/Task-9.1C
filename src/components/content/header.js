import React from 'react';
import './Header.css';

export default function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="logo">DEV@Deakin</div>
      <input className="search-input" type="Search" placeholder="search"/>
      <div className="buttons">
        <button className="button">Post</button>
        {/* Use the onLogout prop */}
        <button className="button" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}
