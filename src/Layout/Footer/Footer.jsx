import React from 'react';
import './Footer.css';
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    ExternalLink,
    Clock
} from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Villa Grande</h3>
                    <p>Комплексне оздоблення інтер'єрів від дизайну до реалізації. Якість, надійність та індивідуальний підхід до кожного клієнта.</p>
                </div>

                <div className="footer-section">
                    <h4>Контакти</h4>
                    <ul className="contact-list">
                        <li>
                            <a href="tel:+380501234567" className="contact-link">
                                <Phone size={18} strokeWidth={2} />
                                <span>+380 50 123 4567</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@villagrande.ua" className="contact-link">
                                <Mail size={18} strokeWidth={2} />
                                <span>info@villagrande.ua</span>
                            </a>
                        </li>
                        <li className="time-item">
                            <Clock size={20} strokeWidth={2} />
                            <span>Пн-Пт: 9:00-18:00 Сб: 10:00-15:00</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Місцезнаходження</h4>
                    <div className="location">
                        <MapPin size={18} strokeWidth={2} />
                        <p>м. Київ, вул. Дизайнерська, 42<br />ТЦ "Епіцентр", 2 поверх</p>
                    </div>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-link">
                        Подивитися на карті <ExternalLink size={14} />
                    </a>
                </div>

                <div className="footer-section">
                    <h4>Соціальні мережі</h4>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={22} strokeWidth={2} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={22} strokeWidth={2} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={22} strokeWidth={2} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={22} strokeWidth={2} />
                        </a>
                    </div>

                    <h4 className="secondary-website">Наш магазин</h4>
                    <a href="https://villagrande-shop.ua" target="_blank" rel="noopener noreferrer" className="external-site">
                        villagrande-shop.ua <ExternalLink size={14} />
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