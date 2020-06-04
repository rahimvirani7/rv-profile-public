import React from 'react';
import './style.scss';

const rootClass = 'blogSection';


function BlogSection(props) {
  const blogData = props.data && props.data;
  // console.log(blogData);

  return (

    <section id="blog" className={`${rootClass} col-11 mh-auto gutter-0`} data-aos="fade-in">
      <h2 className="text-center">My Blogs</h2>
      <div className={`${rootClass}__wrapper row`}>
        {
          blogData.length && blogData.map((blog, index) => (
          index < 3 &&
          <div className={`${rootClass}__tile col-4`}>
            <div className={`${rootClass}__tile__infowrap`}>
              <p>{blog.heading}</p>
              <span>{blog.dateAdded}</span>
              <span>{blog.category}</span>
            </div>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default BlogSection;