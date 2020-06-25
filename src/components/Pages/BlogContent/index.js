import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Loading from '../../Loading';
import {Helmet} from "react-helmet";
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

  const links = (
    <div className="link-wrapper col-12 p-0">
        <span role="img" aria-label="icon">&#8592;</span>&nbsp;
        <NavLink className="link" to="/#blog">
          Back to Home
        </NavLink>
        <span>&nbsp;|&nbsp;</span>
        <Link className="link" to="/blogs">All Blogs</Link>
    </div>
  );

  // console.log(blogContent);

  return (
    blogContent ?
    <section id="blog" className={`${rootClass} col-12 mh-auto gutter-0`}>
      
      <Helmet>
        <title>{blogContent.heading}</title>
      </Helmet>

      {links}
        <div className={`${rootClass}__contentWrap`}>
          <h2 className="mb-4">{blogContent.heading}</h2>
          { blogContent.coverImg &&
            <img src={blogContent.coverImg} alt="cover" />
          }
          <p>
            {ReactHtmlParser(blogContent.textContent)}
          </p>
          <br/>
          <span>Published on {props.dateFormat(blogContent.dateAdded)}</span>
        </div>
      {links}
    </section>
    : <Loading />
  )
}

export default BlogContent;