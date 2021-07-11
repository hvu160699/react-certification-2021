import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import GlobalProvider from '../../providers/Global';

import HomePage from '../../pages/Home';
import WatchPage from '../../pages/Watch';

import AppLayout from '../Layout';
import LoginPage from '../../pages/Login/Login.page';
import FavoriteWatchPage from '../../pages/FavoriteWatch';
import FavoritesPage from '../../pages/Favorites';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <GlobalProvider>
      <AppLayout>
        <Switch location={background || location}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/watch">
            <WatchPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="/favorites/watch">
            <FavoriteWatchPage />
          </Route>
        </Switch>
        {background && (
          <Route path="/login">
            <LoginPage />
          </Route>
        )}
      </AppLayout>
    </GlobalProvider>
  );
};

export default App;
