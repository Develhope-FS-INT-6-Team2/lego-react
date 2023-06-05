import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isDesktopMenuVisible, setDesktopMenuVisible, handleSidebarItemClick }) {
  const data = [
    { id: 1, title: "LOGO", image: "../assets/icons/main-menu/logo.PNG" },
    { id: 2, title: "SHOP" },
    { id: 3, title: "DISCOVER" },
    { id: 4, title: "HELP" },
  ];

  return (
    <div className="side-bar-main-container">
      <div className="hamburger-menu">
        <img src="../assets/icons/main-menu/menu-alt-lined.png" />
        <span>MENU</span>
      </div>
      <div className="sidebar">
        {data.map((item) => (
          <div
            className="sidebar-items"
            key={item.id}
            onClick={() => handleSidebarItemClick(item)}
          >
            {item.image && (
              <Link to="/">
                <img
                  className="sidebar-item-img"
                  src={item.image}
                  alt={item.title}
                />
              </Link>
            )}
            {!item.image && (
              <span className="sidebar-item-title">{item.title}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
