import React from 'react';
// Import CSS Module
import Styles from './MenuList.module.css';

function MenuList() {
  return (
    <div>
      <ul className={Styles.list}>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default MenuList;
