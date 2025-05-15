import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <section id="main" className="main-section">
      <div className="hero">
        <div className="hero-content">
          <h1>
            Втілюємо Ваші мрії про <span className="text-highlight">ідеальний інтер'єр</span>
          </h1>
          <p>
            Комплексні рішення для оздоблення будь-яких приміщень від дизайну до реалізації.
            Створюємо простір, який відображає вашу індивідуальність.
          </p>
          <a href="#services" className="btn-primary">
            Наші послуги
          </a>
        </div>
        <div className="hero-accent"></div>
      </div>

      <div className="intro">
        <div className="intro-container">
          <div className="intro-content">
            <h2>Про Villa Grande</h2>
            <p>
              Villa Grande - це команда професіоналів, які спеціалізуються на створенні унікальних
              інтер'єрів. Ми пропонуємо повний цикл послуг від розробки дизайн-проекту до постачання
              матеріалів та меблів.
            </p>
            <p>
              Наш підхід - це ідеальне поєднання функціональності, естетики та вашого комфорту.
              Кожен проект - це індивідуальне рішення, яке враховує всі ваші побажання.
            </p>
            <p>
              Ми працюємо з найкращими постачальниками, щоб забезпечити високу якість матеріалів та
              довговічність результату.
            </p>
          </div>
          <div className="intro-stats">
            <div className="stat-item">
              <span className="stat-number">18+</span>
              <span className="stat-text">років досвіду</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">350+</span>
              <span className="stat-text">реалізованих проектів</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-text">задоволених клієнтів</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
