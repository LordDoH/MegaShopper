import React, { useState, useRef } from 'react';
// Import Icon
import { AiOutlineMenu } from 'react-icons/ai';
// Import MenuList
import MenuList from './MenuList';
// Import CSS Module
import Styles from './Menu.module.css';

function Menu() {
  // Hook to Refer itself
  const dropdownRef = useRef(null);
  // State to deploy
  const [isActive, setIsActive] = useState(false);
  // Change State on click
  const onClick = () => setIsActive(!isActive);

  return (
    <div>
      {/* Three lines button */}
      <button className={Styles.btn} type="button" onClick={onClick}>
        <AiOutlineMenu />
      </button>
      {/* Check State to deploy menu */}
      <nav
        className={isActive ? Styles.deploy : Styles.hide}
        ref={dropdownRef}
        isActive={isActive}
      >
        <MenuList />
      </nav>
    </div>
  );
}

export default Menu;
