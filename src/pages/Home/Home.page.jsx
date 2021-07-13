import React, { useEffect, useCallback } from 'react';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';
import Loading from '../../components/Common/Loading';

import { useVideoContext } from '../../providers/Video';
import { withPageLayout } from '../../components/Layout';

const HomePage = () => {
  const {
    state,
    actions: { fetchVideos },
  } = useVideoContext();

  const handleFetchVideos = useCallback(async () => {
    const queryData = {
      q: state.q,
      chart: 'mostPopular',
      part: ['snippet'],
      type: 'video',
      maxResults: 1,
    };

    fetchVideos(queryData);
  }, [state.q, fetchVideos]);

  useEffect(() => {
    handleFetchVideos();
  }, [handleFetchVideos]);

  return (
    <Container className="mx-auto">
      {!state.isLoading ? (
        state.videos && <GridVideo videos={state.videos} pathname="/watch" />
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default withPageLayout(HomePage);
