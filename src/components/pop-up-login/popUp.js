import React, { useState } from 'react';
import './popUp.css'


const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (e) => {
    setIsOpen(true);
    
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="popup-container">
      <a onClick={openPopup} className="open-button">Open Popup</a>
      {isOpen && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div
            className="popup"
            
          >
            <div className="popup-content">
              <h2>Popup Content</h2>
              <p>This is the content of the popup.</p>
              <button onClick={closePopup} className="close-button">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
);
};

export default Popup;