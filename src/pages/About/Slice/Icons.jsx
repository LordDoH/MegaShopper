import React from 'react';
// Import Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGit,
  FaGithub,
  FaReact,
} from 'react-icons/fa';
// Import css
import Styles from './Icons.module.css';

function Icons() {
  return (
    // Creating an Icon bar
    <div className={Styles.main}>
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
      <FaGit />
      <FaGithub />
      <FaReact />
    </div>
  );
}

export default Icons;
