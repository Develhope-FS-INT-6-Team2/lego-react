import React from 'react';
import './sidebarDesktop.css';

// Define DesktopMenuItem component
const DesktopMenuItem = ({ title, arrowImageSrc }) => {
  return (
    <button className="desktop-menu-item">
      <span>{title}</span>
      {arrowImageSrc && <img src={arrowImageSrc} width="8" />}
    </button>
  );
};

// Define DesktopInnerMenuItems component
const DesktopInnerMenuItems = ({ children }) => {
  return (
    <div className="desktop-inner-menu-items">
      <p></p>
      <div className="desktop-inner-menu-items-container">
        {children}
      </div>
    </div>
  );
};

// Main DesktopMenu component
const DesktopMenu = ({ menuItems, innerMenuItems, closeMenu, closeImageSrc }) => {
  return (
    <div className="desktop-menu-container">
      <div className="desktop-menu-wrapper">
        <div className="desktop-menu-items">
          {menuItems.map((item, index) => (
            <DesktopMenuItem key={index} title={item.title} arrowImageSrc={item.arrowImageSrc} />
          ))}
        </div>
        <div className="desktop-menu-seperator"></div>
        <DesktopInnerMenuItems>
          {innerMenuItems}
        </DesktopInnerMenuItems>
      </div>
      <button className="desktop-menu-close" onClick={closeMenu}>
        <img src={closeImageSrc} />
      </button>
    </div>
  );
};

export default DesktopMenu;
