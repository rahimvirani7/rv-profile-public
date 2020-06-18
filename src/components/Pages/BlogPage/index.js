import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Card from '../BlogSection/Card';
import './style.scss';

const rootClass = 'blogPage'

function BlogPage(props) {
  
  const blogData = props.data && props.data;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className={`${rootClass} col-12 mh-auto gutter-0`}>
      <h4 className="text-center">All Blogs</h4>
      <div className={`${rootClass}__wrapper row`}>
        <div className="link-wrapper col-12">
          <span role="img" aria-label="icon">&#8592;</span>&nbsp;
          <NavLink className="link" to="/#blog">
            Back to Home
          </NavLink>
        </div>
        {
          blogData.length && blogData
          .sort((a,b) => {
            return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
          }).reverse()
          .map((blogItem, index) => (
            <Card
              key={index}
              blog={blogItem}
              dateFormat={props.dateFormat}
            />
          ))
        }
      </div>
    </section>
  )
}

export default BlogPage;