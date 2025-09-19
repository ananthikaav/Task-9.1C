import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h3 className="footer-heading">Explore</h3>
        <ul className="footer-list">
          <li className="footer-list-item">Home</li>
          <li className="footer-list-item">Questions</li>
          <li className="footer-list-item">Articles</li>
          <li className="footer-list-item">Tutorials</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-heading">Support</h3>
        <ul className="footer-list">
          <li className="footer-list-item">FAQs</li>
          <li className="footer-list-item">Help</li>
          <li className="footer-list-item">Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-heading">Stay connected</h3>
        <ul className="footer-list">
          <li className="footer-list-item">Facebook</li>
          <li className="footer-list-item">Twitter</li>
          <li className="footer-list-item">Instagram</li>
        </ul>
        </div>
       <div className="footer-section">
        <h3 className="footer-heading">DEV@Deakin 2022</h3>
        <ul className="footer-list">
          <li className="footer-list-item">Privacy Poilicy</li>
          <li className="footer-list-item">Terms</li>
          <li className="footer-list-item">Code Of Conduct</li>
        </ul>
      </div>
    </footer>
  );
}


