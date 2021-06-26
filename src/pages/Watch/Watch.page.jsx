import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';

import Container from '../../components/Common/Container';
import { useVideoContext } from '../../providers/Video';

import { $getVideoDetail } from '../../api/videos';
import { YOUTUBE_VIDEO_URL } from '../../utils/constants';

const WatchPage = () => {
  const { search } = useLocation();
  const { state, dispatch } = useVideoContext();

  const { video } = state;

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

      if (res.items.length > 0)
        dispatch({ type: 'VIDEO/FETCH_DETAIL_SUCCESS', payload: res.items[0].snippet });
    } catch (err) {
      dispatch({ type: 'VIDEO/FETCH_FAILURE' });
    }
  }, [videoId, dispatch]);

  useEffect(() => {
    fetchVideoDetail();
  }, [fetchVideoDetail]);

  return (
    <Container>
      <div>
        <iframe
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`${YOUTUBE_VIDEO_URL}${videoId}`}
        />
      </div>
    </Container>
  );
};

export default WatchPage;
