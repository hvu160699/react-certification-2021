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

      const videos =
        list.items && list.items.filter((item) => item.snippet !== undefined);

      dispatch({
        type: 'VIDEO/FETCH_DETAIL_SUCCESS',
        payload: { video: single.items[0], videos },
      });
    } catch (err) {
      dispatch({ type: 'VIDEO/FETCH_FAILURE' });
    }
  };
};

const actions = { handleSearchVideos, fetchVideos, fetchVideoDetail };

export default actions;
