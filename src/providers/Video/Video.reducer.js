const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'VIDEO/SET_KEYWORD':
      return { ...state, q: payload };
    case 'VIDEO/SELECT_VIDEO':
      return { ...state, selectedVideo: payload };
    case 'VIDEO/FETCH_PROCESSING':
      return { ...state, isLoading: true };
    case 'VIDEO/FETCH_DETAIL_SUCCESS':
      return { ...state, isLoading: false, video: payload };
    case 'VIDEO/FETCH_LIST_SUCCESS':
      return { ...state, isLoading: false, videos: payload };
    case 'VIDEO/FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true };
    default:
      return { ...state };
  }
};

export default reducer;
