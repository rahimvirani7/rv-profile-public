import React from 'react';
import './style.scss';
import profile from '../../../media/profile.jpg';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Typist from 'react-typist';

const rootClass = 'splash-wrapper';

function Splash() {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.2, 0], [0.4, 1]);

  const typing = (
    <Typist>
      <code>
        <Typist.Delay ms={1000} />
          <span className="text-blue">console</span>
          <span className="text-white">.</span>
          <span className="text-yellow">log</span>
          <span className="text-white">(</span>
        <Typist.Delay ms={750} />
          <span className="text-orange">"Welcome to my website"</span>
          <span className="text-white">);</span>
      </code>
    </Typist>
  );

  return (

    <div
      style={{scale: scrollYProgress}}
      className={`${rootClass} col-11 m-auto p-0`}
    >
      <motion.div
        style={{scale}}
        className={`${rootClass}__img-profile col-9 col-xl-3 col-md-4`}
        data-aos="fade-in"
      >
        <img src={profile} alt="profile" />
      </motion.div>
      
      <p className={`${rootClass}__typing-text`}>
        {typing}
      </p>
      <ul>
        <li>
          <NavLink smooth to="/#about">About</NavLink>
        </li>
        <li>
          <Link to="/">Skills</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Splash;