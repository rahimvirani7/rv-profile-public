import React from 'react';
import './style.scss';
import logo from '../../../logo.svg';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Splash() {
  return (

    <div className="splash-wrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <ul>
        <li><NavLink smooth to="/#about">
          About Me
        </NavLink></li>
        <li><a href="#">
          Link 2
        </a></li>
        <li><a href="#">
          Link 3
        </a></li>
      </ul>
    </div>
  )
}

export default Splash;