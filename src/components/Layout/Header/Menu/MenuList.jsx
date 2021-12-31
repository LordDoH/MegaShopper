import React from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import CSS Module
import Styles from './MenuList.module.css';

function MenuList() {
  return (
    // Menu links
    <div>
      <Link className={Styles.list} to="/">
        Home
      </Link>
      <Link className={Styles.list} to="/products">
        Products
      </Link>
      <Link className={Styles.list} to="/about">
        About
      </Link>
    </div>
  );
}

export default MenuList;
