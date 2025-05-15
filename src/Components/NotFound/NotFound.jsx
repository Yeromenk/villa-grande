import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Сторінку не знайдено</h2>
      <p>Вибачте, сторінка, яку ви шукаєте, не існує.</p>
      <Link to="/" className="home-button">
        Повернутися на головну
      </Link>
    </div>
  );
};

export default NotFound;
