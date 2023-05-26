import React, { useState } from "react";
import "./MainMenu.css";
import Shopping from "./main-menu-components/Shopping";
import Sidebar from "./main-menu-components/Sidebar";
import DesktopMenu from "../sidemenus/DesktopMenu";

function MainMenu() {
  // New state variable for tracking the visibility of the desktop menu
  const [isDesktopMenuVisible, setDesktopMenuVisible] = useState(false);
  

  return (
    <div className="main-menu-container">
      <Sidebar isDesktopMenuVisible={isDesktopMenuVisible}
          setDesktopMenuVisible={setDesktopMenuVisible} />
      <Shopping />

      {isDesktopMenuVisible && (
        <DesktopMenu onClose={() => setDesktopMenuVisible(false)} />
      )}
      {/* Display the DesktopMenu when isDesktopMenuVisible is true, and pass the onClose prop */}
    </div>
  );
}

export default MainMenu;
