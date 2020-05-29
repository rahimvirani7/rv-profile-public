import React from 'react';
import './style.scss';
import logo from '../../../logo.svg';

function BlogPage() {
  return (

    <div className="blog-page-wrapper col-4 m-auto">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        THIS IS BLOG PAGE!
      </p>
    </div>
  )
}

export default BlogPage;