import React from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import css
import Styles from './P404.module.css';
// Import images
import I404 from '../../assets/images/robot404.png';
// Import layout components
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

function P404() {
  return (
    <>
      <Header />
      {/* 404 Page Content */}
      <div className={Styles.main}>
        {/* 404 Image */}
        <img src={I404} alt="I404" />
        {/* Go Back Button */}
        <Link className={Styles.button} to="/">
          Go Back
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default P404;
