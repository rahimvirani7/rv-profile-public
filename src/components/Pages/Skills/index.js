import React from 'react';
import './style.scss';
import ReactHtmlParser from 'react-html-parser';

const rootClass = 'skills';


function Skills(props) {

  const skills = [
    {
      name: 'HTML | CSS | JavaScript',
      category: 'Fundamental Web Development',
      icon:'../images/icons/web.png',
      order: 1
    },
    {
      name: 'ReactJS',
      category: 'Front-end Web Development',
      icon:'../images/icons/react.png',
      order: 3
    },
    {
      name: 'Angular',
      category: 'Front-end Web Development',
      icon:'../images/icons/angular.png',
      order: 7
    },
    {
      name: 'WCAG 2.0',
      category: 'Web Accessibility',
      icon:'../images/icons/accessibility.png',
      order: 4
    },
    {
      name: 'Git',
      category: 'Version Control',
      icon:'../images/icons/git.png',
      order: 6
    },
    {
      name: 'Google Firebase',
      category: 'Back-end Services',
      icon:'../images/icons/firebase.png',
      order: 5
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon:'../images/icons/db.png',
      order: 9
    },
    {
      name: 'Salesforce Front-end/UI',
      category: 'CRM Product',
      icon:'../images/icons/salesforce.png',
      order: 8
    },
    {
      name: 'Adobe Photoshop',
      category: 'Image Processing',
      icon:'../images/icons/photoshop.png',
      order: 12
    },
    {
      name: 'Agile Delivery/Coaching',
      category: 'Methodology',
      icon:'../images/icons/agile1.png',
      order: 2
    },
    {
      name: 'Scrum Master, CSM<sup>&#174;</sup>',
      category: 'Agile Delivery Framework',
      icon:'../images/icons/scrum.png',
      order: 11
    }
  ];

  return (

    <section id="skills" className={`${rootClass} col-12 mh-auto gutter-0`} data-aos="fade-in">
      <h3 className="text-center">Things I know</h3>
      <div className={`${rootClass}__wrapper row`}>
        {
          skills.length && skills
          .sort((a,b) => {
            return a.order - b.order;
          })
          .map((skill, index) => (
          <div key={index} className={`${rootClass}__tile col-9 col-xl-4 col-md-6 mx-auto`}>
            <p
              tabIndex="0"
              className={`${rootClass}__tile__skillwrap`}>
              <img src={skill.icon} alt="icon" />
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