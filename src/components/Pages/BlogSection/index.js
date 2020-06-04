import React from 'react';
import './style.scss';

const rootClass = 'blogSection';


function BlogSection(props) {
  const blogData = props.data && props.data;
  //console.log(blogData)

  return (

    <div id="blog" className={`${rootClass} col-11 m-auto p-0`} data-aos="fade-in">
      {
        blogData.length && blogData.map((blog, index) => (
          <div key={index}>
          <p>{blog.heading}</p>
          <p>{blog.dateAdded}</p>
          <p>{blog.category}</p>
          <p>{blog.contentText}</p>
          <img width="300" src={blog.coverImg} alt="" />
          <hr/>
          </div>
        ))
      }
    </div>
  )
}

export default BlogSection;