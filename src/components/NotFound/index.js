import React from 'react';
import Loading from '../Loading';
import './style.scss';

const rootClass = 'notFound';

function NotFound(props) {
  return (
    props.admins.length !== 0 ?
    <section className={`${rootClass} col-12 mh-auto gutter-0`}>
      <span aria-label="404 Image" role="img">&#128533;</span>
      <br />
      <h1>Uh-oh</h1>
      <h3>Page not found</h3>
      <br />
      <h5>The page you're looking for does not exist or an error has occured.</h5>
      <h5>Please head over to <a className="link" href="/">home</a> and try again.</h5>
    </section>
    :
    <Loading />
  )
}

export default NotFound;