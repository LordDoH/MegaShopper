import React from 'react';
// Import CSS Module
import Styles from './Footer.module.css';
// Import Santa Image
import Santa from '../../../assets/images/Santa.png';

function Footer() {
  return (
    // Flex main Container
    <div className={Styles.main}>
      {/* Imagen */}
      <img className={Styles.imgFooter} src={Santa} alt="Santa" />
      {/* Flex text Container */}
      <div className={Styles.text}>
        <span>Have fun shopping!</span>
        <span>
          Created by Daniel Ochoa -{' '}
          <a href="https://github.com/LordDoH">@LordDoH</a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
