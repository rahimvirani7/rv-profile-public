import React from 'react';
import './style.scss';
import ReactHtmlParser from 'react-html-parser';

const rootClass = 'skills';


function Skills(props) {

  const skills = props.skills && props.skills;

  return (

    <section id="skills" className={`${rootClass} col-12 mh-auto gutter-0`} data-aos="fade-in">
      <h4 className="text-center">Ask me about</h4>
      <div className={`${rootClass}__wrapper row`}>
        {
          skills.length && skills
          .sort((a,b) => {
            return a.order - b.order;
          })
          .map((skill, index) => (
          <div key={index} className={`${rootClass}__tile col-12 col-sm-9 col-md-6 col-xl-4 mx-auto`}>
            <p
              className={`${rootClass}__tile__skillwrap`}>
              <img src={`../images/icons/${skill.icon}.png`} alt="icon" />
              <b>{ReactHtmlParser(skill.name)}</b>
              <span className="" >{skill.category}</span>
            </p>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;