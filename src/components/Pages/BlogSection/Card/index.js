import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style.scss'

function Card(props) {

  const rootClass = 'card__tile';
  let history = useHistory();

  return (
    <div className={`${rootClass} ${props.styleClass} mx-auto`} data-aos="fade-in">
      <button
        onClick={(e) => {
          props.analytics.logEvent(('blog_item_clicked'), {
            blog_title: props.blog.heading,
            blog_id: props.blog.doc_id
          });
          history.push('/blog/' + props.blog.doc_id)
        }
        }
        className={`${rootClass}__infowrap`}>
        <p className="ovflow-ellipses">{props.blog.heading}</p>
        <span className="date">{props.dateFormat(props.blog.dateAdded)}</span>
        <span
          className={
            props.blog.category.toLowerCase() === 'tech' ? 'cat-tech' :
              props.blog.category.toLowerCase() === 'general' ? 'cat-general' :
                'cat-misc'
          } ></span>
        <span className="category">{props.blog.category}</span>
      </button>
    </div>
  )

}

export default Card;