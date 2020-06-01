import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../../../media/profile.jpg';

function AboutMe() {
  return (

    <div id="about" className="splash-wrapper" data-aos="fade-in">
      <div className="img-profile col-3">
        <img src={profile} alt="profile" />
      </div>
      <p>
        THIS IS ABOUT ME PAGE!
      </p>
    </div>
  )
}

export default AboutMe;