import React, { Suspense } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import Router from './Router';

import Loading from '../components/Common/Loading';

import { ROUTES_PATH } from '../utils/constants';
import { loader } from '../utils/fns';

const AppRouter = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Suspense fallback={<Loading />}>
      <Switch location={background || location}>
        {ROUTES_PATH.map((route) => (
          <Router key={route.name} component={loader(route.name)} {...route} />
        ))}
        {background && (
          <Router path="/login" component={loader('Login')} private={false} />
        )}
        <Router path="*" component={loader('Error')} private={false} />
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
