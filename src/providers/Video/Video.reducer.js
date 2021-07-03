const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'VIDEO/SET_KEYWORD':
      return { ...state, q: payload };
    case 'VIDEO/FETCH_PROCESSING':
      return { ...state, isLoading: true };
    case 'VIDEO/FETCH_DETAIL_SUCCESS': {
      const { video, videos } = payload;
      return { ...state, video, videos, isLoading: false };
    }
    case 'VIDEO/FETCH_LIST_SUCCESS':
      return { ...state, videos: payload, isLoading: false };
    case 'VIDEO/FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true };
    default:
      return { ...state };
  }
};

export default reducer;
