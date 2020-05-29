import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../logo.png';

function AboutMe() {
  return (

    <div id="about" className="splash-wrapper" data-aos="fade-in">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        THIS IS ABOUT ME PAGE!
      </p>
    </div>
  )
}

export default AboutMe;