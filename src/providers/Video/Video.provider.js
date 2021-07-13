import React, { useContext, useReducer } from 'react';
import reducer from './Video.reducer';
import actions from './Video.actions';
import useEnhancedActions from '../../utils/hooks/useEnhancedActions';

const VideoContextValue = {
  video: undefined,
  videos: [],
  q: '',
  isLoading: false,
  isError: false,
};

export const VideoContext = React.createContext({
  state: {},
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
  const { enhancedActions } = useEnhancedActions(actions, dispatch);

  return (
    <VideoContext.Provider value={{ state, actions: enhancedActions }}>
      {props.children}
    </VideoContext.Provider>
  );
};

export { useVideoContext };
export default VideoProvider;
