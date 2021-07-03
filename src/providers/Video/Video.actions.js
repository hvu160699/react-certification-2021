import { $getVideos, $getVideoDetail } from '../../api/videos';

const handleSearchVideos = (keyword) => (dispatch) =>
  dispatch({ type: 'VIDEO/SET_KEYWORD', payload: keyword });

const fetchVideos = (queryData) => {
  return async (dispatch) => {
    dispatch({ type: 'VIDEO/FETCH_PROCESSING' });

    try {
      const res = await $getVideos(queryData);

      dispatch({ type: 'VIDEO/FETCH_LIST_SUCCESS', payload: res.items || [] });
    } catch (err) {
      dispatch({ type: 'VIDEO/FETCH_FAILURE' });
    }
  };
};

const fetchVideoDetail = (querySingle, queryList) => {
  return async (dispatch) => {
    dispatch({ type: 'VIDEO/FETCH_PROCESSING' });

    try {
      const [single, list] = await Promise.all([
        $getVideoDetail(querySingle),
        $getVideos(queryList),
      ]);

      dispatch({
        type: 'VIDEO/FETCH_DETAIL_SUCCESS',
        payload: { video: single.items[0], videos: list.items },
      });
    } catch (err) {
      dispatch({ type: 'VIDEO/FETCH_FAILURE' });
    }
  };
};

const handleSelectVideo = (videoId) => (dispatch) =>
  dispatch({ type: 'VIDEO/SELECT_VIDEO', payload: videoId });

const actions = { handleSearchVideos, fetchVideos, fetchVideoDetail, handleSelectVideo };

export default actions;
