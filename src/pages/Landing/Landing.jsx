import React from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import css
import Styles from './Landing.module.css';
// Import images
import Tree from '../../assets/images/Tree.png';
import Snowbag from '../../assets/images/Snowbag.png';
import Store from '../../assets/images/Store.png';
// Import layout components
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

function Landing() {
  return (
    <>
      <Header />
      {/* Landing Page Content */}
      <div className={Styles.main}>
        {/* Card 1: Xmas tree */}
        <div className={Styles.card}>
          <img src={Tree} alt="Tree" />
          {/* Description card: Title and content */}
          <div className={Styles.description}>
            <span className={Styles.title}>Make Christmas shopping!</span>
            <span className={Styles.text}>
              Here you will find the best prices for every gift you need for the
              best Christmas presents.
            </span>
          </div>
        </div>
        {/* Card 2: Snowman with bags */}
        <div className={Styles.card}>
          <img src={Snowbag} alt="Snowbag" />
          {/* Description card: Title and content */}
          <div className={Styles.description}>
            <span className={Styles.title}>Don&apos;t lose any offer!</span>
            <span className={Styles.text}>
              We have the best offers in the market so you can get whatever you
              want with the best prices, but be careful you have limited time to
              get those offers! Tick Tock!
            </span>
          </div>
        </div>
        {/* Card 3: Store */}
        <div className={Styles.card}>
          <img src={Store} alt="Store" />
          {/* Description card: Title and button */}
          <div className={Styles.description}>
            <span className={Styles.title}>Run before time is over!</span>
            <Link className={Styles.button} to="/products">
              Shop
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
