import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootClass = 'about-wrapper';

function AboutMe() {
  return (

    <div id="about" className={`${rootClass} col-11 m-auto p-0`} data-aos="fade-in">
      <h3>
        THIS IS ABOUT ME PAGE!
      </h3>
    </div>
  )
}

export default AboutMe;