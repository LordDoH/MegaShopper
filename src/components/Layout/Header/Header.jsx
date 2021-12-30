import React from 'react';
// Import CSS Module
import Styles from './Header.module.css';
// Import Logo
import Logo from '../../../assets/images/Logo.png';
// Import Menu
import Menu from './Menu/Menu';

function Header() {
  return (
    <div className={Styles.mainContainer}>
      <img className={Styles.imgHeader} src={Logo} alt="Logo" />
      <div className={Styles.mobileMenu}>
        <Menu />
      </div>
      <div className={Styles.desktopMenu}>
        <span>Home</span>
        <span>Products</span>
        <span>About</span>
      </div>
    </div>
  );
}

export default Header;
