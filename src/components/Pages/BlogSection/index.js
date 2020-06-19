import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './style.scss';

const rootClass = 'blogSection';


function BlogSection(props) {
  const blogData = props.data && props.data;
  // console.log(blogData);

  return (

    <section id="blog" className={`${rootClass} col-12 mh-auto gutter-0`} data-aos="fade-in">
      <h4 className="text-center">My Blogs</h4>
      <div className={`${rootClass}__wrapper row`}>
        {
          blogData.length && blogData
          .sort((a,b) => {
            return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
          }).reverse()
          .map((blogItem, index) => (
          index < 3 &&
            <Card
              styleClass={'col-12 col-sm-9 col-lg-4'}
              key={index}
              blog={blogItem}
              dateFormat={props.dateFormat}
            />
          ))
        }
        <div className="link-wrapper col-12">
          <span role="img" aria-label="icon">&#128279;</span>&nbsp;
          <Link className="link" to="/blogs">
            View all blogs
          </Link>
        </div>
        
      </div>
    </section>
  )
}

export default BlogSection;