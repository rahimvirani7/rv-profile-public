import React from 'react';
import './style.scss';

const rootClass = 'skills';


function Skills(props) {

  return (

    <section id="skills" className={`${rootClass} col-12 mh-auto gutter-0`} data-aos="fade-in">
      <h3 className="text-center">Things I know</h3>
      <div className={`${rootClass}__wrapper row`}>
        skills here
      </div>
    </section>
  )
}

export default Skills;