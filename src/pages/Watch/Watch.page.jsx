import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';

import GridVideo from '../../components/GridVideo';
// import VideoDetail from '../../components/VideoDetail/VideoDetail.component';

import { WatchPageContainer } from './Watch.styled';
import { useVideoContext } from '../../providers/Video';

import { $getVideoDetail } from '../../api/videos';
import { FAKE_VIDEOS_DATA } from '../../utils/constants';

const WatchPage = () => {
  const { search } = useLocation();
  const { state, dispatch } = useVideoContext();

  const videoId = useMemo(() => {
    const id = search.replace('?v=', '');

    return id;
  }, [search]);

  const fetchVideoDetail = useCallback(async () => {
    console.log('start');
    dispatch({ type: 'VIDEO/FETCH_PROCESSING' });
    try {
      const queryData = {
        part: ['snippet', 'contentDetails', 'statistics'],
        id: videoId,
      };

      const res = await $getVideoDetail(queryData);

      dispatch({ type: 'VIDEO/FETCH_DETAIL_SUCCESS', payload: res.items[0] });
      dispatch({ type: 'VIDEO/FETCH_LIST_SUCCESS', payload: FAKE_VIDEOS_DATA });
    } catch (err) {
      dispatch({ type: 'VIDEO/FETCH_FAILURE' });
    }
  }, [videoId, dispatch]);

  useEffect(() => {
    fetchVideoDetail();
  }, [fetchVideoDetail]);

  return (
    <WatchPageContainer>
      {!state.isLoading && state.video && (
        <>
          {/* <section className="watch-section">
            <VideoDetail video={state.video} videoId={videoId} />
          </section> */}
          <section className="list-section">
            <GridVideo videos={state.videos} vertical />
          </section>
        </>
      )}
    </WatchPageContainer>
  );
};

export default WatchPage;
