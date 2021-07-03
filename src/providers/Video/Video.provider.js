import React, { useContext, useReducer } from 'react';
import reducer from './Video.reducer';
import actions from './Video.actions';

const VideoContextValue = {
  video: undefined,
  videos: [],
  q: '',
  isLoading: false,
  isError: false,
};

const VideoContext = React.createContext({
  state: { ...VideoContextValue },
  dispatch: () => {},
  actions: {},
});

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
    <VideoContext.Provider value={{ state, dispatch, actions }}>
      {props.children}
    </VideoContext.Provider>
  );
};

export { useVideoContext };
export default VideoProvider;
