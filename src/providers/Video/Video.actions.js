import { $getVideos, $getVideoDetail } from '../../api/videos';

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

const fetchVideoDetail = (queryData) => {
  return async (dispatch) => {
    dispatch({ type: 'VIDEO/FETCH_PROCESSING' });

    try {
      const res = await $getVideoDetail(queryData);

      dispatch({ type: 'VIDEO/FETCH_DETAIL_SUCCESS', payload: res.items[0].snippet });
    } catch (err) {
      dispatch({ type: 'VIDEO/FETCH_FAILURE' });
    }
  };
};

const handleSelectVideo = (videoId) => (dispatch) =>
  dispatch({ type: 'VIDEO/SELECT_VIDEO', payload: videoId });

export { fetchVideos, fetchVideoDetail, handleSelectVideo };
