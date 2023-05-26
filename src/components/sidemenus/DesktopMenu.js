import React, { useState, useEffect } from 'react';
import './sidebarDesktop.css';

const menuItems = [
  { id: 1, name: 'Sets by theme', hasSubmenu: true },
  { id: 2, name: 'AGES', hasSubmenu: true },
  { id: 3, name: 'Price ranges', hasSubmenu: true },
  { id: 4, name: 'LEGO Merchandise', hasSubmenu: true },
  { id: 5, name: 'Interests', hasSubmenu: true },
  { id: 6, name: 'Pick and Build', hasSubmenu: true },
  { id: 7, name: 'Exclusives', hasSubmenu: false },
  { id: 8, name: 'New', hasSubmenu: false },
  { id: 9, name: 'Bestsellers', hasSubmenu: false },
  { id: 10, name: 'Home decor', hasSubmenu: false },
  { id: 11, name: 'Offers & Sale', hasSubmenu: false },
  { id: 12, name: 'Gift Cards', hasSubmenu: false },
  { id: 13, name: 'Coming Soon', hasSubmenu: false },
  { id: 14, name: 'Last chance to buy', hasSubmenu: false },
];

const DesktopMenu = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeMenu = () => {
    setIsOpen(false);
    onClose();
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
              {item.hasSubmenu && (
                <img src="../assets/icons/header/arrow.svg" width="8" alt={item.name} />
              )}
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
