import React, { useEffect, useCallback } from 'react';

import { $getVideos } from '../../api/videos';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';
import { useVideoContext } from '../../providers/Video';

const HomePage = () => {
  const { state, dispatch } = useVideoContext();

  const fetchVideos = useCallback(async () => {
    dispatch({ type: 'VIDEO/FETCH_PROCESSING' });
    try {
      const queryData = {
        q: state.q,
        chart: 'mostPopular',
        regionCode: 'vn',
        part: ['snippet'],
        type: 'video',
        maxResults: 5,
      };

      const res = await $getVideos(queryData);

      if (res.items.length > 0)
        dispatch({ type: 'VIDEO/FETCH_LIST_SUCCESS', payload: res.items });
    } catch (err) {
      dispatch({ type: 'VIDEO/FETCH_FAILURE' });
    }
  }, [state.q, dispatch]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <Container className="mx-auto">
      {!state.isLoading && <GridVideo videos={state.videos} />}
    </Container>
  );
};

export default HomePage;
