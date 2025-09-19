import React from "react";
import "./tutorial.css";
const TutorialData = [
  {
    title: 'Building a Todo App',
    description: 'Step-by-step React tutorial.',
    username: 'coder123',
    rating: 4.7,
    image: './React.png',
  },
  {
    title: 'JavaScript Basics',
    description: 'Learn the essentials of JavaScript.',
    username: 'devguy',
    rating: 4.2,
    image: './java.svg',
  },
];
export default function TutorialComponent() {
  return (
    <section className="tutorials-section">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-list">
        {TutorialData.map(({title, description, username, rating, image }) => (
          <article className="tutorial-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>User: {username}</p>
            <p>Rating: {rating} ⭐</p>
          </article>
        ))}
      </div>
      <button className="tutorial-button">See all tutorials</button>
    </section>
  );
}
