import React, { useState } from "react";
import "./MainMenu.css";
import Shopping from "./main-menu-components/Shopping";
import Sidebar from "./main-menu-components/Sidebar";
import DesktopMenu from "../sidemenus/DesktopMenu";
import data from "../sidemenus/data/menuData.json";

function MainMenu() {
  const [isDesktopMenuVisible, setDesktopMenuVisible] = useState(false);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("");

  const handleSidebarItemClick = (item) => {
    if (item.title === "SHOP") {
      setDesktopMenuVisible(true);
      setSelectedSidebarItem(item.title.toLowerCase());
    } else if (item.title === "DISCOVER") {
      setDesktopMenuVisible(true);
      setSelectedSidebarItem(item.title.toLowerCase());
    } else if (item.title === "HELP") {
      setDesktopMenuVisible(true);
      setSelectedSidebarItem(item.title.toLowerCase());
    }
  };

  return (
    <div className="main-menu-container">
      <Sidebar
        isDesktopMenuVisible={isDesktopMenuVisible}
        setDesktopMenuVisible={setDesktopMenuVisible}
        handleSidebarItemClick={handleSidebarItemClick}
      />
      <Shopping />

      {isDesktopMenuVisible && (
        <DesktopMenu
          onClose={() => setDesktopMenuVisible(false)}
          sidebarItem={selectedSidebarItem}
          menuData={data[selectedSidebarItem]}
        />
      )}
    </div>
  );
}

export default MainMenu;
