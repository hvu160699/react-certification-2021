import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';

import Container from '../../components/Common/Container';
import GridVideo from '../../components/GridVideo';
import { useVideoContext } from '../../providers/Video';

import { $getVideoDetail } from '../../api/videos';
import { YOUTUBE_VIDEO_URL } from '../../utils/constants';

const WatchPage = () => {
  const { search } = useLocation();
  const { state, dispatch } = useVideoContext();

  const videoId = useMemo(() => {
    const id = search.replace('?v=', '');

    return id;
  }, [search]);

  const fetchVideoDetail = useCallback(async () => {
    dispatch({ type: 'VIDEO/FETCH_PROCESSING' });
    try {
      const queryData = {
        part: ['snippet', 'contentDetails', 'statistics'],
        id: videoId,
      };

      const res = await $getVideoDetail(queryData);

      dispatch({ type: 'VIDEO/FETCH_DETAIL_SUCCESS', payload: res.items[0] });
    } catch (err) {
      dispatch({ type: 'VIDEO/FETCH_FAILURE' });
    }
  }, [videoId, dispatch]);

  useEffect(() => {
    fetchVideoDetail();
  }, [fetchVideoDetail]);

  console.log(state.isLoading);

  return (
    <Container className="mx-auto">
      {!state.isLoading && state.video && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          <div style={{ gridColumn: '1 / span 8' }}>
            <iframe
              style={{ width: '100%', height: 425 }}
              title={state.video.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src={`${YOUTUBE_VIDEO_URL}${videoId}`}
            />
            <div>{state.video.snippet.channelTitle}</div>
            <div>{state.video.snippet.title}</div>
            <div>
              {state.video.statistics.viewCount} views - {state.video.snippet.publishedAt}
            </div>
          </div>
          <div style={{ width: '100%', gridColumnStart: 9, gridColumnEnd: -1 }}>
            <GridVideo videos={state.videos} handleSelect={null} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default WatchPage;
