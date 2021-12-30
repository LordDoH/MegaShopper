import React from 'react';
// Import css
import Styles from './Landing.module.css';
// Import images
import Tree from '../../assets/images/Tree.png';
import Snowbag from '../../assets/images/Snowbag.png';
import Store from '../../assets/images/Store.png';

function Landing() {
  return (
    <div className={Styles.main}>
      <div className={Styles.card}>
        <img src={Tree} alt="Tree" />
        <div className={Styles.description}>
          <span className={Styles.title}>Make Christmas shopping!</span>
          <span className={Styles.text}>
            Here you will find the best prices for every gift you need for the
            best Christmas presents.
          </span>
        </div>
      </div>

      <div className={Styles.card}>
        <img src={Snowbag} alt="Snowbag" />
        <div className={Styles.description}>
          <span className={Styles.title}>Don&apos;t lose any offer!</span>
          <span className={Styles.text}>
            We have the best offers in the market so you can get whatever you
            want with the best prices, but be careful you have limited time to
            get those offers! Tick Tock!
          </span>
        </div>
      </div>

      <div className={Styles.card}>
        <img src={Store} alt="Store" />
        <div className={Styles.description}>
          <span className={Styles.title}>Run before time is over!</span>
          <button className={Styles.button} type="button">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
