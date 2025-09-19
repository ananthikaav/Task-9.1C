import React from "react";
import "./subscription.css";
export default function Subscription() {
  return (
    <section className="subscription-section">
      <h2>Sign Up for Our Daily Insider</h2>
      <form className="subscription-form">
        <input type="email" placeholder="Enter your email" className="subscription-input" />
        <button type="submit" className="subscription-button">Subscribe</button>
      </form>
    </section>
  );
}

