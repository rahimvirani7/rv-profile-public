import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import 'prismjs/prism';
// import 'prismjs/themes/prism-okaidia.css';
import ReactHtmlParser from 'react-html-parser';
import './style.scss';

const rootClass = 'blogContent';


function BlogContent(props) {

  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let { blog_id } = useParams();
  const blogContent = props.data.length && props.data.filter(item => String(item.doc_id) === blog_id)[0];

  // console.log(blogContent);

  return (

    <section id="blog" className={`${rootClass} col-12 mh-auto gutter-0`}>
      <NavLink to="/#blog">Back to Home</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/blogs">View all my blogs</Link>
      { blogContent &&
        <div className={`${rootClass}__contentWrap`}>
          <h2 className="text-center mb-4">{blogContent.heading}</h2>
          { blogContent.coverImg &&
            <img src={blogContent.coverImg} alt="cover" />
          }
          <p>
            {ReactHtmlParser(blogContent.textContent)}
          </p>
          <br/>
          <span>Published on {props.dateFormat(blogContent.dateAdded)}</span>
        </div>
      }
    </section>
  )
}

export default BlogContent;