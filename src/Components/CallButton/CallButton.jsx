import React from 'react';
import { Phone } from 'lucide-react';
import './CallButton.css';

const CallButton = ({ phoneNumber = '+380 995 256 783' }) => {
  return (
    <a href={`tel:${phoneNumber}`} className="call-button" aria-label="Зателефонувати">
      <div className="call-button-inner">
        <Phone size={24} strokeWidth={2.5} />
      </div>
      <div className="call-button-pulse"></div>
    </a>
  );
};

export default CallButton;
