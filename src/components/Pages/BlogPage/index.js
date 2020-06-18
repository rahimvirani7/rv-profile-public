import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../BlogSection/Card';
import './style.scss';

const rootClass = 'blogPage'

function BlogPage(props) {
  const blogData = props.data && props.data;
  return (

    <section className={`${rootClass} col-12 mh-auto gutter-0`}>
      <h4 className="text-center">All Blogs</h4>
      <div className={`${rootClass}__wrapper row`}>
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