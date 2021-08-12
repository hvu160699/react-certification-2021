import React from 'react';
import AppProvider from '../App';
import VideoProvider from '../Video';
import AuthProvider from '../Auth';

const GlobalProvider = (props) => {
  return (
    <AppProvider>
      <VideoProvider>
        <AuthProvider>{props.children}</AuthProvider>
      </VideoProvider>
    </AppProvider>
  );
};

export default GlobalProvider;
