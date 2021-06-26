import React, { useContext, useReducer } from 'react';
import reducer from './Video.reducer';

const VideoContextValue = {
  video: {},
  videos: [],
  q: '',
  isLoading: false,
  isError: false,
};

const VideoContext = React.createContext(VideoContextValue);

const useVideoContext = () => {
  const context = useContext(VideoContext);

  if (!context) {
    throw new Error("Can't use 'useVideoContext' without an VideoProvider");
  }

  return context;
};

const VideoProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, VideoContextValue);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </VideoContext.Provider>
  );
};

export { useVideoContext };
export default VideoProvider;
