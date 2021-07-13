export const initialState = {
  isAuthenticated: false,
  user: {},
  favorites: [],
  video: undefined,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'AUTH/LOG_IN': {
      return { ...state, user: { ...payload }, isAuthenticated: true };
    }
    case 'AUTH/LOG_OUT': {
      return { ...initialState };
    }
    case 'AUTH/ADD_TO_FAVORITES': {
      const updatedVideos = [...state.favorites, payload];
      return { ...state, favorites: updatedVideos };
    }
    case 'AUTH/REMOVE_FROM_FAVORITES': {
      const updatedVideos = [...state.favorites].filter(
        (video) => video.id.videoId !== payload
      );

      return { ...state, favorites: updatedVideos };
    }
    case 'AUTH/SELECT_VIDEO': {
      return { ...state, video: payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
