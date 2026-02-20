import React from 'react';
import './Footer.css';
import { Phone, Mail, MapPin, Instagram, Facebook, ExternalLink, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Villa Grande</h3>
          <p>
            Комплексне оздоблення інтер'єрів від дизайну до реалізації. Якість, надійність та
            індивідуальний підхід до кожного клієнта.
          </p>
        </div>

        <div className="footer-section">
          <h4>Контакти</h4>
          <ul className="contact-list">
            <li>
              <a href="tel:+380 995 256 783" className="contact-link">
                <Phone size={18} strokeWidth={2} />
                <span>+380 995 256 783</span>
              </a>
            </li>
            <li>
              <a href="mailto:villagrande.uz@gmail.com" className="contact-link">
                <Mail size={18} strokeWidth={2} />
                <span>villagrande.uz@gmail.com</span>
              </a>
            </li>
            <li className="time-item">
              <Clock size={20} strokeWidth={2} />
              <span>
                Пн-Пт: 10:00 - 19:00 <br /> Сб: 10:00 - 16:00
              </span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Місцезнаходження</h4>
          <div className="location">
            <MapPin size={18} strokeWidth={2} />
            <p>вулиця Івана Франка, 58, Ужгород, Закарпатська область, Україна</p>
          </div>
          <a
            href="https://maps.app.goo.gl/H9QUx7d8FU5c3Qcc7"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            Подивитися на карті <ExternalLink size={14} />
          </a>
        </div>

        <div className="footer-section">
          <h4>Соціальні мережі</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/villa_grande1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={2} />
            </a>
            <a
              href="https://www.facebook.com/villagrande1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={22} strokeWidth={2} />
            </a>
          </div>

          <h4 className="secondary-website">Наш інший сайт</h4>
          <a
            href="https://kuhnya.net.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="external-site"
          >
            https://kuhnya.net.ua/ <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Villa Grande. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
