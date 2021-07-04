import React, { useEffect, useCallback } from 'react';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';
import { useVideoContext } from '../../providers/Video';
import { withPageLayout } from '../../components/Layout';
import Loading from '../../components/Common/Loading';

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
      {!state.isLoading ? (
        state.videos && <GridVideo videos={state.videos} />
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default withPageLayout(HomePage);
