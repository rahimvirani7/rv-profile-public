import React from 'react';
import './style.scss';

const rootClass = 'blogSection';


function BlogSection() {
  return (

    <div id="blog" className={`${rootClass} col-11 m-auto p-0`} data-aos="fade-in">
      <p>BLOG SECTION</p>
    </div>
  )
}

export default BlogSection;