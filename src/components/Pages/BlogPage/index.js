import React from 'react';
import './style.scss';
import logo from '../../../logo.png';

function BlogPage() {
  return (

    <div className="blog-page-wrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        THIS IS BLOG PAGE!
      </p>
    </div>
  )
}

export default BlogPage;