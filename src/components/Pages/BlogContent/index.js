import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
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

    <section id="blog" className={`${rootClass} col-11 mh-auto gutter-0`}>
      <Link to="/#blog">Go Back</Link>
      { blogContent &&
        <h2 className="text-center">{blogContent.heading}</h2>
      }
    </section>
  )
}

export default BlogContent;