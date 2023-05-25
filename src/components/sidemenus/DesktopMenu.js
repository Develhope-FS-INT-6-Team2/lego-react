import React, { useState, useEffect } from 'react';
import './sidebarDesktop.css';

const menuItems = [
  { id: 1, name: 'Sets by theme' },
  { id: 2, name: 'AGES' },
  { id: 3, name: 'Price ranges' },
  { id: 4, name: 'LEGO Merchandise' },
  { id: 5, name: 'Interests' },
  { id: 6, name: 'Pick and Build' },
  { id: 7, name: 'Exculisives' },
  { id: 8, name: 'New' },
  { id: 9, name: 'Bestsellers' },
  { id: 10, name: 'Home decor' },
  { id: 11, name: 'Offers & Sale' },
  { id: 12, name: 'Gift Cards' },
  { id: 13, name: 'Coming Soon' },
  { id: 14, name: 'Last chance to buy' },
];

const DesktopMenu = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeMenu = () => {
    setIsOpen(false);
    onClose();
  };

  // Handle window resize for padding
  useEffect(() => {
    const handleResize = () => {
      const desktopMenuContainer = document.querySelector(".desktop-menu-container");
      const startPadding = 8.5;
      const width = window.innerWidth;

      if (width < 1600) {
        desktopMenuContainer.style.paddingLeft = `${startPadding}rem`;
        return;
      }

      const diff = width - 1600;
      const diffAsRem = diff / 32;
      
      if (diff > 0) {
        desktopMenuContainer.style.paddingLeft = `${diffAsRem + startPadding}rem`;
      }
    }

    window.addEventListener('resize', handleResize);

    // cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log("DesktopMenu rendered");
}, []);


  if (!isOpen) {
    return null;
  }

  return (
    <div className="desktop-menu-container">
      <div className="desktop-menu-wrapper">
        <div className="desktop-menu-items">
          {menuItems.map((item) => (
            <button className="desktop-menu-item" key={item.id}>
              <span>{item.name}</span>
              <img src="../assets/icons/header/arrow.svg" width="8" alt={item.name} />
            </button>
          ))}
        </div>
        <div className="desktop-menu-seperator"></div>
        <div className="desktop-inner-menu-items">
          <p></p>
          <div className="desktop-inner-menu-items-container"></div>
        </div>
      </div>
      <button className="desktop-menu-close" onClick={closeMenu}>
        <img src="../assets/icons/header/xmark.svg" alt="close" />
      </button>
    </div>
  );
};

export default DesktopMenu;
