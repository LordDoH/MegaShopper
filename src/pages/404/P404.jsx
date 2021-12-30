import React from 'react';
// Import css
import Styles from './P404.module.css';
// Import images
import I404 from '../../assets/images/Robot 404.png';

function P404() {
  return (
    <div className={Styles.main}>
      <img src={I404} alt="I404" />
      <button className={Styles.button} type="button">
        Go Back
      </button>
    </div>
  );
}

export default P404;
