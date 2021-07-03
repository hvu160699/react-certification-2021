import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';

import Styled from './Watch.styled';
import GridVideo from '../../components/GridVideo';
import VideoDetail from '../../components/VideoDetail/VideoDetail.component';
import { withPageLayout } from '../../components/Layout';

import { useVideoContext } from '../../providers/Video';

const WatchPage = () => {
  const { search } = useLocation();
  const {
    state,
    dispatch,
    actions: { fetchVideoDetail },
  } = useVideoContext();

  const videoId = useMemo(() => {
    const id = search.replace('?v=', '');

    return id;
  }, [search]);

  const handleFetchVideoDetail = useCallback(async () => {
    const querySingle = {
      part: ['snippet', 'contentDetails', 'statistics'],
      id: videoId,
      type: 'video',
    };

    const queryList = {
      part: ['snippet'],
      type: 'video',
      relatedToVideoId: videoId,
    };

    fetchVideoDetail(querySingle, queryList)(dispatch);
  }, [videoId, dispatch, fetchVideoDetail]);

  useEffect(() => {
    handleFetchVideoDetail();
  }, [handleFetchVideoDetail]);

  return (
    <Styled.WatchPageContainer>
      {!state.isLoading && (
        <>
          <section className="watch-section">
            {state.video && <VideoDetail video={state.video} videoId={videoId} />}
          </section>
          <section className="list-section">
            {state.videos && <GridVideo videos={state.videos} vertical />}
          </section>
        </>
      )}
    </Styled.WatchPageContainer>
  );
};

export default withPageLayout(WatchPage);
