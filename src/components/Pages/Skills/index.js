import React from 'react';
import './style.scss';

const rootClass = 'skills';


function Skills(props) {

  const skills = [
    {
      name: 'HTML | CSS | JavaScript',
      category: 'Fundamental Web Development',
      icon:'',
      order: 1
    },
    {
      name: 'ReactJS',
      category: 'Front-end Web Development',
      icon:'',
      order: 2
    },
    {
      name: 'Angular',
      category: 'Front-end Web Development',
      icon:'',
      order: 3
    },
    {
      name: 'Web Accessibility (WCAG 2.0)',
      category: 'Web Basics',
      icon:'',
      order: 4
    },
    {
      name: 'Git',
      category: 'Version Control',
      icon:'',
      order: 5
    },
    {
      name: 'Google Firebase',
      category: 'Back-end Services',
      icon:'',
      order: 6
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon:'',
      order: 7
    },
    {
      name: 'Salesforce Front-end/UI',
      category: 'CRM Product',
      icon:'',
      order: 8
    },
    {
      name: 'Adobe Photoshop',
      category: 'Image Processing',
      icon:'',
      order: 9
    },
    {
      name: 'Agile Delivery/Coaching',
      category: 'Methodology',
      icon:'',
      order: 10
    },
    {
      name: 'SCRUM/KANBAN',
      category: 'Agile Delivery Frameworks',
      icon:'',
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
          <div key={index} className={`${rootClass}__tile col-12 col-xl-4 col-md-6 mx-auto`}>
            <p
              tabIndex="0"
              className={`${rootClass}__tile__skillwrap`}>
              <b>{skill.name}</b>
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