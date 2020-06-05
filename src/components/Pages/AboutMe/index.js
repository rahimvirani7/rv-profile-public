import React from 'react';
import { StylesProvider, Paper } from '@material-ui/core';
import './style.scss';

const rootClass = 'about-wrapper';

function AboutMe(props) {
  return (

    <section id="about" className={`${rootClass} col-12 mh-auto gutter-0`} data-aos="fade-in">
      <StylesProvider injectFirst>
      <Paper className={`${rootClass}__text`} elevation={0}>
        <h2 className="text-center">About Me</h2>
        <div className={`${rootClass}__text__body`}>
          { props.data && props.data.text }
        </div>
      </Paper></StylesProvider>
    </section>
  )
}

export default AboutMe;