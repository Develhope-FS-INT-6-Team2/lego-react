import React from "react";
import "./sidebarDesktop.css";

const InnerMenuItems = ({ subMenuData }) => {
  const menuContainerStyle =
    subMenuData.length > 0
      ? "desktop-inner-menu-items-container desktop-inner-menu-items-container-visible"
      : "desktop-inner-menu-items-container";

  return (
    <div className={menuContainerStyle}>
      {subMenuData.map((item, index) => (
        <button className="desktop-sub-menu-item" key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default InnerMenuItems;
