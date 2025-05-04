// src/Components/Services/Services.jsx
import React from 'react';
import './Services.css';
import { Brush, Clipboard, DoorClosed, Droplet, Sofa } from 'lucide-react';

const Services = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    const services = [
        {
            id: "design",
            number: "01",
            title: "Робимо спрощений дизайн приміщення",
            description: "(швидко, дешево)",
            icon: <Brush size={28} strokeWidth={2} />
        },
        {
            id: "specs",
            number: "02",
            title: "Складаємо специфікацію матеріалів",
            description: "",
            icon: <Clipboard size={28} strokeWidth={2} />
        },
        {
            id: "doors",
            number: "03",
            title: "Двері, підлогові покриття",
            description: "підбираємо у нас в салоні",
            icon: <DoorClosed size={28} strokeWidth={2} />
        },
        {
            id: "tiles",
            number: "04",
            title: "Плитка + сантехніка + змішувачі",
            description: "підбираємо у нас в салоні",
            icon: <Droplet size={28} strokeWidth={2} />
        },
        {
            id: "furniture",
            number: "05",
            title: "Меблі",
            description: "проектуємо і робимо самі",
            icon: <Sofa size={28} strokeWidth={2} />
        }
    ];

    return (
        <div className="services-container">
            {services.map((service) => (
                <div
                    key={service.id}
                    className="service-item"
                    onClick={() => scrollToSection(service.id + "-section")}
                >
                    <div className="service-number">{service.number}</div>
                    <div className="service-icon">
                        {service.icon}
                    </div>
                    <div className="service-content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;