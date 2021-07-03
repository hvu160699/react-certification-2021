import React, { useEffect, useCallback } from 'react';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';
import { useVideoContext } from '../../providers/Video';
import { withPageLayout } from '../../components/Layout';

const HomePage = () => {
  const {
    state,
    dispatch,
    actions: { fetchVideos },
  } = useVideoContext();

  const handleFetchVideos = useCallback(async () => {
    const queryData = {
      q: state.q,
      chart: 'mostPopular',
      regionCode: 'vn',
      part: ['snippet'],
      type: 'video',
      maxResults: 5,
    };

    fetchVideos(queryData)(dispatch);
  }, [state.q, dispatch, fetchVideos]);

  useEffect(() => {
    handleFetchVideos();
  }, [handleFetchVideos]);

  return (
    <Container className="mx-auto">
      {!state.isLoading && <GridVideo videos={state.videos} />}
    </Container>
  );
};

export default withPageLayout(HomePage);
