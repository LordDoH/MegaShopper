import React from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import CSS Module
import Styles from './Header.module.css';
// Import Logo
import Logo from '../../../assets/images/Logo.png';
// Import Menu
import Menu from './Menu/Menu';

function Header() {
  return (
    // Main Container
    <div className={Styles.mainContainer}>
      {/* Logo */}
      <Link to="/">
        <img className={Styles.imgHeader} src={Logo} alt="Logo" />
      </Link>
      {/* Mobile menu */}
      <div className={Styles.mobileMenu}>
        <Menu />
      </div>
      {/* Desktop menu */}
      <div className={Styles.desktopMenu}>
        <Link className={Styles.link} to="/">
          Home
        </Link>
        <Link className={Styles.link} to="/products">
          Products
        </Link>
        <Link className={Styles.link} to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
