import React, { useState } from 'react';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  // state and handlers here
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="menu-content">
        {/* Menu items go here */}
      </div>
    </div>
  );
}

export default Menu;
