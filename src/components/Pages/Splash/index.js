import React from 'react';
import './style.scss';
import profile from '../../../media/profile.jpg';
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Typist from 'react-typist';

const rootClass = 'splash-wrapper';

const menuItems = [
  {
    title: 'About',
    url: 'about'
  },
  {
    title: 'Skills',
    url: ''
  },
  {
    title: 'Blogs',
    url: 'blog'
  },
  {
    title: 'Projects',
    url: ''
  },
  {
    title: 'Contact',
    url: ''
  },
]

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

    <section
      style={{scale: scrollYProgress}}
      className={`${rootClass} col-12 m-auto gutter-0`}
    >
      <motion.div
        style={{scale}}
        className={`${rootClass}__img-profile col-9 col-xl-4 col-md-4`}
        data-aos="fade-in"
      >
        <img src={profile} alt="profile" />
      </motion.div>
      
      <h2 className="mt-3 mb-0">Rahim Virani</h2>
      <div className={`${rootClass}__typing-text`}>
        {typing}
      </div>
      <ul>
        {
          menuItems.map((item, index) =>  
          <li key={index}>
            <NavLink className="shine" smooth to={`/#${item.url}`}>{item.title}</NavLink>
          </li>)
        }
      </ul>
    </section>
  )
}

export default Splash;