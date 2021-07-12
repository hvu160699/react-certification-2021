import React from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { AUTH_STORAGE_KEY } from '../utils/constants';
import { storage } from '../utils/storage';

const Router = (props) => {
  const { component: Component, isPrivate, ...rest } = props;
  const location = useLocation();
  const history = useHistory();

  const isAuthenticated = storage.get(AUTH_STORAGE_KEY)
    ? storage.get(AUTH_STORAGE_KEY).isAuthenticated
    : false;

  return isPrivate ? (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          history.push({ pathname: '/login', state: { background: location } })
        )
      }
    />
  ) : (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  );
};

export default Router;
