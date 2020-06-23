import React from 'react';
import './style.scss';

const rootClass = 'loading';

function Loading() {
  return (
    <section className={`${rootClass} col-12 mh-auto gutter-0`}>
      <div className="loader"></div>
    </section>
  )
}

export default Loading;