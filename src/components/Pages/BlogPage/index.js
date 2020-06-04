import React from 'react';
import './style.scss';
import logo from '../../../logo.png';

const rootClass = 'blogPage'

function BlogPage() {
  return (

    <div className={`${rootClass} col-12 m-auto p-0`}>
      <div className={`${rootClass}__logo col-9 col-xl-3 col-md-4`}>
        <img src={logo} alt="logo" />
      </div>
      
      <p>
        THIS IS BLOG PAGE!
      </p>
    </div>
  )
}

export default BlogPage;