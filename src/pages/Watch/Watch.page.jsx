import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';

import GridVideo from '../../components/GridVideo';
import VideoDetail from '../../components/VideoDetail/VideoDetail.component';

import Styled from './Watch.styled';
import { useVideoContext } from '../../providers/Video';
import { fetchVideoDetail } from '../../providers/Video/Video.actions';

const WatchPage = () => {
  const { search } = useLocation();
  const { state, dispatch } = useVideoContext();

  const videoId = useMemo(() => {
    const id = search.replace('?v=', '');

    return id;
  }, [search]);

  const handleFetchVideoDetail = useCallback(async () => {
    const querySingle = {
      part: ['snippet', 'contentDetails', 'statistics'],
      id: videoId,
    };

    const queryList = {
      part: ['snippet'],
      type: 'video',
      relatedToVideoId: videoId,
    };

    dispatch(fetchVideoDetail(querySingle, queryList));
  }, [videoId, dispatch]);

  useEffect(() => {
    handleFetchVideoDetail();
  }, [handleFetchVideoDetail]);

  return (
    <Styled.Layout>
      <Styled.MainContainer>
        {!state.isLoading && (
          <>
            <section className="watch-section">
              {state.video && <VideoDetail video={state.video} videoId={videoId} />}
            </section>
            <section className="list-section">
              <GridVideo videos={state.videos} vertical />
            </section>
          </>
        )}
      </Styled.MainContainer>
    </Styled.Layout>
  );
};

export default WatchPage;
