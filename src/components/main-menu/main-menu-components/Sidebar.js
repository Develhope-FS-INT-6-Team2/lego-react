import React, { useState } from "react";
import DesktopMenu from "../../sidemenus/DesktopMenu"; // Import the DesktopMenu component

function Sidebar() {
  const data = [
    { id: 1, title: "LOGO", image: "../assets/icons/main-menu/logo.PNG" },
    { id: 2, title: "SHOP" },
    { id: 3, title: "DISCOVER" },
    { id: 4, title: "HELP" },
  ];

  // New state variable for tracking the visibility of the desktop menu
  const [isDesktopMenuVisible, setDesktopMenuVisible] = useState(false);

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

      {isDesktopMenuVisible && <DesktopMenu onClose={() => setDesktopMenuVisible(false)} />} 
      {/* Display the DesktopMenu when isDesktopMenuVisible is true, and pass the onClose prop */}
      
    </div>
  );
}

export default Sidebar;
