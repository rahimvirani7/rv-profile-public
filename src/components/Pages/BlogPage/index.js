import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Card from '../BlogSection/Card';
import {Helmet} from "react-helmet";
import './style.scss';

const rootClass = 'blogPage'

function BlogPage(props) {
  
  const blogData = props.data && props.data;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className={`${rootClass} col-12 mh-auto gutter-0`}>
      <Helmet>
        <title>Blogs | Rahim Virani</title>
      </Helmet>

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
              styleClass={"col-12 col-sm-9 col-lg-6"}
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