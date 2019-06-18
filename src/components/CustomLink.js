import React from 'react';
import { Link, Route } from 'react-router-dom';

export default ({ label, to, activeOnlyWhenExact, generalClassName }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      return (
        <li className={`${generalClassName}${match ? ' is-active' : ''}`}>
          <Link to={to}>{label}</Link>
        </li>
      )
    }
    } />
  );
};