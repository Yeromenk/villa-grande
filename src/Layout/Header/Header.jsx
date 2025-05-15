import React from 'react';
import logo from '../../../public/edited.jpg';
import './Header.css';
import { Menu } from 'lucide-react';

const Header = () => {
  const toggleMobileMenu = () => {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo} alt="Villa Grande Logo" />
          <a href="#main" className="logo-link">
            <div className="brand">
              <h1>Villa Grande</h1>
              <p className="slogan">Вирішуємо комплексно оздоблення вашого об'єкта</p>
            </div>
          </a>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <Menu size={24} strokeWidth={2} />
        </button>

        <nav className="header-nav">
          <ul>
            <li>
              <a href="#main">Головна</a>
            </li>
            <li>
              <a href="#services">Послуги</a>
            </li>
            <li>
              <a href="#contact">Контакти</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
