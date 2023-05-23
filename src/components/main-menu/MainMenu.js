import React from "react";
import "./MainMenu.css";
import Shopping from "./main-menu-components/Shopping";
import Sidebar from "./main-menu-components/Sidebar";

function MainMenu() {
  return (
    <div className="main-menu-container">
      <Sidebar />
      <Shopping />
    </div>
  );
}

export default MainMenu;
