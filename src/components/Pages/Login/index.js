import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import './style.scss';

const rootClass = 'login';

function LoginPage(props) {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    props.auth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div className={rootClass}>
      <p>You must log in to view the "{from.pathname.replace("/","")}" page</p>
      <button className="button" onClick={login}>Log in</button>
      {
        props.session && !props.auth.isAuthenticated ?
        <p className="errors">Access Denied!</p>
        : null
      }
    </div>
  );
}

export default LoginPage;