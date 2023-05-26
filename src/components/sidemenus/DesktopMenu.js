import React, { useState, useEffect } from "react";
import "./sidebarDesktop.css";
import data from "./data/menuData.json";

const DesktopMenu = ({ onClose, sidebarItem }) => {
  const [isOpen, setIsOpen] = useState(true);

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

  // Handle window resize for padding
  useEffect(() => {
    const handleResize = () => {
      const desktopMenuContainer = document.querySelector(
        ".desktop-menu-container"
      );
      const startPadding = 8.5;
      const width = window.innerWidth;

      if (width < 1600) {
        desktopMenuContainer.style.paddingLeft = `${startPadding}rem`;
        return;
      }

      const diff = width - 1600;
      const diffAsRem = diff / 32;

      if (diff > 0) {
        desktopMenuContainer.style.paddingLeft = `${
          diffAsRem + startPadding
        }rem`;
      }
    };

    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => window.removeEventListener("resize", handleResize);
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
          {Object.keys(data[sidebarItem]).map((key, index) => (
            <button className="desktop-menu-item" key={index}>
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
