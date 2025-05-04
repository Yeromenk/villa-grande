// src/components/ServiceDetails.jsx
import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = () => {
    return (
        <div className="service-details">
            <section id="design-section" className="detail-section">
                <h2>01. Спрощений дизайн приміщення</h2>
                <div className="detail-content">
                    <p>Ми пропонуємо швидке та доступне рішення для дизайну вашого приміщення. Наші фахівці створять функціональний проект, який відповідає вашим потребам та бюджету.</p>
                    {/* More content here */}
                </div>
            </section>

            <section id="specs-section" className="detail-section">
                <h2>02. Специфікація матеріалів</h2>
                <div className="detail-content">
                    <p>Детальна специфікація усіх необхідних матеріалів для вашого проекту. Ми підберемо оптимальні варіанти та надамо повний перелік із розрахунками.</p>
                    {/* More content here */}
                </div>
            </section>

            <section id="doors-section" className="detail-section">
                <h2>03. Двері та підлогові покриття</h2>
                <div className="detail-content">
                    <p>У нашому салоні представлений широкий вибір дверей та підлогових покриттів від провідних виробників. Наші консультанти допоможуть з вибором.</p>
                    {/* More content here */}
                </div>
            </section>

            <section id="tiles-section" className="detail-section">
                <h2>04. Плитка, сантехніка та змішувачі</h2>
                <div className="detail-content">
                    <p>Пропонуємо великий асортимент плитки, сантехніки та змішувачів різних стилів та цінових категорій. Професійна консультація та підбір комплексних рішень.</p>
                    {/* More content here */}
                </div>
            </section>

            <section id="furniture-section" className="detail-section">
                <h2>05. Меблі на замовлення</h2>
                <div className="detail-content">
                    <p>Проектуємо та виготовляємо меблі за індивідуальним замовленням. Від розробки концепції до встановлення готових виробів.</p>
                    {/* More content here */}
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;