import React from 'react';
import './style.scss';
import logo from '../../../logo.svg';

function AboutMe() {
  return (

    <div id="about" className="splash-wrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        THIS IS ABOUT ME PAGE!
      </p>
    </div>
  )
}

export default AboutMe;