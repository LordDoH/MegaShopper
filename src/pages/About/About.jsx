import React from 'react';
// Import css
import Styles from './About.module.css';
// Import images
import Photo from '../../assets/images/photo.jpeg';
// Import components
import Object from './Slice/Object';
import Icons from './Slice/Icons';
// Import layout components
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

function About() {
  return (
    <>
      <Header />
      {/* About page content */}
      <div className={Styles.main}>
        {/* Card 1: Picture, object, and about me */}
        <div className={Styles.card}>
          {/* Graphic content: picture and object */}
          <div className={Styles.graph}>
            <img className={Styles.pic} src={Photo} alt="Pic" />
            <Object />
          </div>
          {/* Textcard: Aboutme */}
          <div className={Styles.textcard}>
            <div className={Styles.title}>About me</div>
            <div className={Styles.text}>
              I&apos;m Daniel Ochoa, Civil Engineer passionate about tech and
              coding currently studying the MERN framework at Top Make it Real
              Bootcamp. I&apos;m from Medellin - Colombia achieved my bachelor
              and a graduate degree in the National University of Colombia; my
              main goal in the Bootcamp will be to boost my coding skills then
              find my path in the developing world, finally, my main hobbies are
              watching sci-fi series and reading books, I like pasta, pizza, and
              driving bikes.
            </div>
          </div>
        </div>
        {/* Card 2: Skills, Libraries and Top Program */}
        <div className={Styles.card}>
          {/* Textcard: Developed Skills and Libraries */}
          <div className={Styles.textcard}>
            <div className={Styles.title}>Developed Skills</div>
            <Icons />
            <div className={Styles.title}>Libraries</div>
            <div className={Styles.text}>
              <ul className={Styles.ulist}>
                <li>Eslint</li>
                <li>Prettier</li>
                <li>React Router</li>
                <li>Axios</li>
                <li>React Icons</li>
                <li>Faker</li>
                <li>Styled Components</li>
              </ul>
            </div>
          </div>
          {/* Textcard: What we had learned in the Top Program */}
          <div className={Styles.textcard}>
            <div className={Styles.title}>Top Program</div>
            <div className={Styles.text}>
              In the Top Make it Real Bootcamp, We have learned how to develop
              SPA&apos;s using React and Hooks like useState, useEffect, and
              useContext. Learned many ways of styling components by SASS CSS,
              Styled Components, and pure CSS. Learned how applications work by
              sending a request and receiving a response through fetch API and
              adapters like Axios. We have learned under the SCRUM methodology
              and published our code into our repositories in the GitHub
              servers. In the following weeks, We&apos;ll be learning Backend
              topics and new technologies such as MongoDB, Express, and Nodejs.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
