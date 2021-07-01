import React, { useEffect, useCallback } from 'react';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';
import { useVideoContext } from '../../providers/Video';
import { fetchVideos } from '../../providers/Video/Video.actions';

const HomePage = () => {
  const { state, dispatch } = useVideoContext();

  const handleFetchVideos = useCallback(async () => {
    const queryData = {
      q: state.q,
      chart: 'mostPopular',
      regionCode: 'vn',
      part: ['snippet'],
      type: 'video',
      maxResults: 5,
    };

    dispatch(fetchVideos(queryData));
  }, [state.q, dispatch]);

  useEffect(() => {
    handleFetchVideos();
  }, [handleFetchVideos]);

  return (
    <Container className="mx-auto">
      {!state.isLoading && <GridVideo videos={state.videos} />}
    </Container>
  );
};

export default HomePage;
