import React, { useState, useEffect } from "react";
import InnerMenuItems from "./InnerMenuItems";
import "./sidebarDesktop.css";
import data from "./data/menuData.json";

const DesktopMenu = ({ onClose, sidebarItem }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [subMenuData, setSubMenuData] = useState([]);

  const closeMenu = () => {
    setIsOpen(false);
    onClose();
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleMenuItemClick = (key) => {
    setSelectedMenuItem(key);
    setSubMenuData(data[sidebarItem][key]);
  };


  return (
    <div className="desktop-menu-container">
      <div className="desktop-menu-wrapper">
        <div className="desktop-menu-items">
          {Object.keys(data[sidebarItem]).map((key, index) => (
            <button
              className="desktop-menu-item"
              onClick={() => handleMenuItemClick(key)}
              key={index}
            >
              <span>{key}</span>
              {data[sidebarItem][key].length > 0 && (
                <img
                  src="../assets/icons/header/arrow.svg"
                  width="8"
                  alt={key}
                />
              )}
            </button>
          ))}
        </div>
        <div className="desktop-menu-seperator"></div>        
          {selectedMenuItem && subMenuData.length > 0 && (
            <InnerMenuItems subMenuData={subMenuData} />
          )}        
      </div>
      <button className="desktop-menu-close" onClick={closeMenu}>
        <img src="../assets/icons/header/xmark.svg" alt="close" />
      </button>
    </div>
  );
};

export default DesktopMenu;
