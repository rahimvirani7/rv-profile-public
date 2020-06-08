import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const rootClass = 'blogSection';


function BlogSection(props) {
  const blogData = props.data && props.data;
  let history = useHistory();
  // console.log(blogData);

  return (

    <section id="blog" className={`${rootClass} col-12 mh-auto gutter-0`} data-aos="fade-in">
      <h3 className="text-center">My Blogs</h3>
      <div className={`${rootClass}__wrapper row`}>
        {
          blogData.length && blogData
          .sort((a,b) => {
            return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
          }).reverse()
          .map((blog, index) => (
          index < 3 &&
          <div key={index} className={`${rootClass}__tile col-12 col-lg-4`}>
            <button
              onClick={()=>{
                  history.push('/blog/'+blog.doc_id)
                }
              }
              className={`${rootClass}__tile__infowrap`}>
              <p>{blog.heading}</p>
              <span className="date">{props.dateFormat(blog.dateAdded)}</span>
              <span 
                className={
                  blog.category.toLowerCase() === 'tech' ? 'cat-tech' :
                  blog.category.toLowerCase() === 'general' ? 'cat-general' :
                  'cat-misc'
                } ></span>
              <span className="category">{blog.category}</span>
            </button>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default BlogSection;