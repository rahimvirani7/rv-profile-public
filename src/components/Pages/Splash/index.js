import React from 'react';
import './style.scss';
import profile from '../../../media/profile.jpg';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function Splash() {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.2, 0], [0.4, 1]);

  return (

    <div style={{scale: scrollYProgress}} className="splash-wrapper col-11 m-auto">
      <motion.div style={{scale}} className="img-profile col-9 col-xl-3 col-md-4" data-aos="fade-in">
        <img src={profile} alt="profile" />
      </motion.div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <ul>
        <li>
          <NavLink smooth to="/#about">About Me</NavLink>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          Link 3
        </li>
      </ul>
    </div>
  )
}

export default Splash;