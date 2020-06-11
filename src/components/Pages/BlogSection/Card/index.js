import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style.scss'

function Card(props) {

  const rootClass = 'card__tile';
  let history = useHistory();

  return (
    <div className={`${rootClass} col-12 col-sm-9 col-lg-4 mx-auto`}>
      <button
        onClick={(e) => {
          history.push('/blog/' + props.blog.doc_id)
        }
        }
        className={`${rootClass}__infowrap`}>
        <p>{props.blog.heading}</p>
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