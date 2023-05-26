import React, { useState } from "react";
 // Import the DesktopMenu component

function Sidebar({ isDesktopMenuVisible, setDesktopMenuVisible }) {
  const data = [
    { id: 1, title: "LOGO", image: "../assets/icons/main-menu/logo.PNG" },
    { id: 2, title: "SHOP" },
    { id: 3, title: "DISCOVER" },
    { id: 4, title: "HELP" },
  ];

   

  // New function for handling click on the sidebar items
  const handleSidebarItemClick = (item) => {
    console.log("Sidebar item clicked", item);
    if (item.title === "SHOP") {
      setDesktopMenuVisible(true);
    }
  };  
  

  return (
    <div className="sidebar">
      {data.map((item) => (
        <div
          className="sidebar-items"
          key={item.id}
          onClick={() => handleSidebarItemClick(item)} // Register the click event
        >
          {item.image && (
            <img
              className="sidebar-item-img"
              src={item.image}
              alt={item.title}
            />
          )}
          {!item.image && (
            <span className="sidebar-item-title">{item.title}</span>
          )}
        </div>
      ))}

      
      
    </div>
  );
}

export default Sidebar;
