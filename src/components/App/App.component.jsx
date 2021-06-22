import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import AppProvider from '../../providers/App';
import VideoProvider from '../../providers/Video';

import HomePage from '../../pages/Home';
import WatchPage from '../../pages/Watch';

import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <VideoProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/watch">
                  <WatchPage />
                </Route>
              </Switch>
            </Layout>
          </VideoProvider>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
