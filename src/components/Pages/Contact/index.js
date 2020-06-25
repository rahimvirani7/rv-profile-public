import React from 'react';
import './style.scss';

const rootClass = 'contact';


function Contact() {

  const details = [
    { 
      label: 'Email',
      icon: 'email',
      value: 'rahim.virani09@gmail.com',
      url: 'mailto:rahim.virani09@gmail.com'
    }
    ,{ 
      label: 'LinkedIn',
      icon: 'linkedin',
      value: 'https://linkedin.com/in/rahim-virani',
      url: 'https://linkedin.com/in/rahim-virani'
    }
    // ,{ 
    //   label: 'Resume',
    //   icon: 'resume',
    //   value: 'View PDF',
    //   url: 'https://firebasestorage.googleapis.com/v0/b/rahim-virani.appspot.com/o/assets%2Frahim_virani_SM.pdf?alt=media&token=2d68527e-8acc-4275-8ec2-7cb8acd3b021'
    // }
  ]


  return (

    <section id="contact" className={`${rootClass} col-12 mh-auto gutter-0`} data-aos="fade-in">
      <h4 className="text-center">Contact me</h4>
      <div className={`${rootClass}__wrapper row`}>
        {
          details.length && details
          .map((item, index) => (
          <div key={index} className={`${rootClass}__tile col-12 col-sm-9 col-md-6 mx-auto`} data-aos="fade-in">
            <p
              className={`${rootClass}__tile__tilewrap`}>
              <img src={`../images/icons/${item.icon}.png`} alt="icon" />
              <b>{item.label}</b>
              <a rel="noopener noreferrer" target="_blank" href={item.url} className="" >
                {item.value}
              </a>
            </p>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default Contact;