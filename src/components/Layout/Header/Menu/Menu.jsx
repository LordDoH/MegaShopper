import React, { useState, useRef } from 'react';
// Import Icon
import { AiOutlineMenu } from 'react-icons/ai';
// Import MenuList
import MenuList from './MenuList';
// Import CSS Module
import Styles from './Menu.module.css';

function Menu() {
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  return (
    <div>
      <button className={Styles.btn} type="button" onClick={onClick}>
        <AiOutlineMenu />
      </button>
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
