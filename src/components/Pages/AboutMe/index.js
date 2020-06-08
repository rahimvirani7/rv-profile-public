import React from 'react';
import { StylesProvider, Paper } from '@material-ui/core';
import './style.scss';

const rootClass = 'about-wrapper';

function AboutMe(props) {
  return (

    <section id="about" className={`${rootClass} col-12 mh-auto gutter-0`} data-aos="fade-in">
      <StylesProvider injectFirst>
      <Paper className={`${rootClass}__text`} elevation={0}>
        <h3 className="text-center">About Me</h3>
        <div className={`${rootClass}__text__body`}>
          <p>
            { props.data && props.data.text }
          </p>
        </div>
      </Paper></StylesProvider>
    </section>
  )
}

export default AboutMe;