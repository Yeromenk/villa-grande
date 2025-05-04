import React from 'react';
import logo from '../../assets/edited.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <img src={logo} alt="Villa Grande Logo" />
                    <div className="brand">
                        <h1>Villa Grande</h1>
                        <p className="slogan">Вирішуємо комплексно оздоблення вашого об'єкта</p>
                    </div>
                </div>

                <nav className="header-nav">
                    <ul>
                        <li><a href="#main">Головна</a></li>
                        <li><a href="#services">Послуги</a></li>
                        <li><a href="#portfolio">Портфоліо</a></li>
                        <li><a href="#contact">Контакти</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;