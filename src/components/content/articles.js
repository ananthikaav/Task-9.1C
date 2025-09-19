import React from 'react';
import './Articles.css';
const articles = [
  {
    article_name: 'The Pragmatic Programmers',
    description: 'A book about computer programming and software engineering.',
    author: 'Andy Hunt and Dave Thomas',
    rating: 4.5,
     image:'./book1.jpg',
  },
  {
    article_name: 'Coding Horror',
    description: 'Focusing on software development, programming, and the broader world of technology',
    author: 'Jeff Atwood',
    rating: 4.0,
    image: './codinghorror.png',
  },
];
export default function ArticlesComponent() {
  return (
    <section className="articles-section">
  <h2>Featured Articles</h2>
  <div className="article-list">
    {articles.map(({article_name, description, author, rating, image }) => (
      <article className="article">
        <img src={image} alt={article_name} className="article-image" />
        <h3>{article_name}</h3>
        <p>{description}</p>
        <p>Author: {author}</p>
        <p>Rating: {rating} ⭐</p>
      </article>
    ))}
  </div>
  <button className="see-all-button">See all articles</button>
</section>
  )
}
