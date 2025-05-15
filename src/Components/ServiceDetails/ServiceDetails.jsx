import React from 'react';
import './ServiceDetails.css';
import roomDesign from '../../../public/assets/photo_2025-05-15_14-55-30.jpg';
import specification from '../../../public/assets/photo_2025-05-15_14-55-35.jpg';
import doors from '../../../public/assets/photo_2025-05-15_14-55-32.jpg';

const ServiceDetails = () => {
  return (
    <div className="service-details">
      <section id="design-section" className="detail-section">
        <h2>01. Спрощений дизайн приміщення</h2>
        <div className="detail-content">
          <div className="detail-text">
            <p>
              Ми пропонуємо швидке та доступне рішення для дизайну вашого приміщення. Наші фахівці
              створять функціональний проект, який відповідає вашим потребам та бюджету.
            </p>
            <p>
              Спрощений дизайн включає планування простору, підбір основних матеріалів та кольорових
              рішень. Такий підхід дозволяє заощадити час та кошти, але при цьому отримати
              професійний результат.
            </p>
          </div>
          <div className="detail-image">
            <img src={roomDesign} alt="Дизайн приміщення" />
          </div>
        </div>
      </section>

      <section id="specs-section" className="detail-section">
        <h2>02. Специфікація матеріалів</h2>
        <div className="detail-content">
          <div className="detail-text">
            <p>
              Детальна специфікація усіх необхідних матеріалів для вашого проекту. Ми підберемо
              оптимальні варіанти та надамо повний перелік із розрахунками.
            </p>
            <p>
              Наша специфікація включає кількість, розміри та характеристики матеріалів, що допоможе
              уникнути помилок при закупівлі та монтажі, а також оптимізувати бюджет.
            </p>
          </div>
          <div className="detail-image">
            <img src={specification} alt="Специфікація матеріалів" />
          </div>
        </div>
      </section>

      <section id="doors-section" className="detail-section">
        <h2>03. Двері та підлогові покриття</h2>
        <div className="detail-content">
          <div className="detail-text">
            <p>
              У нашому салоні представлений широкий вибір дверей та підлогових покриттів від
              провідних виробників. Наші консультанти допоможуть з вибором.
            </p>
            <p>
              Ми пропонуємо міжкімнатні та вхідні двері різних стилів та цінових категорій, а також
              ламінат, паркет, вінілову підлогу та інші покриття високої якості.
            </p>
          </div>
          <div className="detail-image">
            <img src={doors} alt="Двері та підлогові покриття" />
          </div>
        </div>
      </section>

      <section id="tiles-section" className="detail-section">
        <h2>04. Плитка, сантехніка та змішувачі</h2>
        <div className="detail-content">
          <div className="detail-text">
            <p>
              Пропонуємо великий асортимент плитки, сантехніки та змішувачів різних стилів та
              цінових категорій. Професійна консультація та підбір комплексних рішень.
            </p>
            <p>
              Наша колекція включає керамічну плитку, керамограніт, мозаїку, а також ванни, душові
              кабіни, раковини, унітази, біде та змішувачі від європейських виробників.
            </p>
          </div>
          <div className="detail-image">
            <img src={roomDesign} alt="Плитка та сантехніка" />
          </div>
        </div>
      </section>

      <section id="furniture-section" className="detail-section">
        <h2>05. Меблі на замовлення</h2>
        <div className="detail-content">
          <div className="detail-text">
            <p>
              Проектуємо та виготовляємо меблі за індивідуальним замовленням. Від розробки концепції
              до встановлення готових виробів.
            </p>
            <p>
              Наша майстерня створює кухні, шафи-купе, гардеробні, спальні гарнітури, вітальні та
              інші меблі, які ідеально вписуються у ваш простір та відповідають усім вашим вимогам.
            </p>
          </div>
          <div className="detail-image">
            <img src={roomDesign} alt="Меблі на замовлення" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
