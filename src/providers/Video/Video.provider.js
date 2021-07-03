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
  // const [enhancedActions, setEnhancedActions] = useState({});

  // useEffect(() => {
  //   Object.keys(actions).forEach((key) =>
  //     setEnhancedActions((e) => ({
  //       ...e,
  //       [key]: (...args) => {
  //         actions[key](...args)(dispatch);
  //       },
  //     }))
  //   );
  // }, []);

  return (
    <VideoContext.Provider value={{ state, dispatch, actions }}>
      {props.children}
    </VideoContext.Provider>
  );
};

export { useVideoContext };
export default VideoProvider;
