import React from 'react';
import profile from '../../../media/profile.jpg';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Typist from 'react-typist';
import { IconButton } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import './style.scss';

const rootClass = 'splash-wrapper';

function Splash(props) {

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

    <section
      style={{scale: scrollYProgress}}
      className={`${rootClass} col-12 m-auto gutter-0`}
    >
      <motion.div
        style={{scale}}
        className={`${rootClass}__img-profile col-9 col-xl-4 col-md-6`}
        data-aos="fade-in"
      >
        <img src={profile} alt="profile" />
      </motion.div>
      
      <Link to="/admin" className="secret">@</Link>
      <h2 className="mt-3 mb-0">Rahim Virani</h2>
      <div className={`${rootClass}__typing-text`}>
        {typing}
      </div>
      <ul>
        {
          props.menuItems.map((item, index) =>  
          <li key={index}>
            <NavLink className="shine" smooth to={`/#${item.url}`}>{item.title}</NavLink>
          </li>)
        }
      </ul>
      <NavLink smooth to='/#about'>
        <IconButton className="down bounce">
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </NavLink>
    </section>
  )
}

export default Splash;