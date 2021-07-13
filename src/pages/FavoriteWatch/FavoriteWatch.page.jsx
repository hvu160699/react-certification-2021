import React, { useEffect, useCallback, useMemo } from 'react';

import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../providers/Auth';

import Styled from '../Watch/Watch.styled';
import Loading from '../../components/Common/Loading';
import GridVideo from '../../components/GridVideo';
import VideoDetail from '../../components/VideoDetail/VideoDetail.component';

import { withPageLayout } from '../../components/Layout';
import { useVideoContext } from '../../providers/Video';

const FavoriteWatch = () => {
  const { search } = useLocation();
  const {
    state: { video, isLoading },
    actions: { fetchVideoDetail },
  } = useVideoContext();

  const {
    state: { favorites, isAuthenticated },
    actions: { handleAddToFavorites, handleRemoveFromFavorites },
  } = useAuthContext();

  const videoId = useMemo(() => {
    const id = search.replace('?v=', '');

    return id;
  }, [search]);

  const handleFetchVideoDetail = useCallback(async () => {
    const queryData = {
      part: ['snippet', 'contentDetails', 'statistics'],
      id: videoId,
      type: 'video',
    };

    fetchVideoDetail(queryData);
  }, [videoId, fetchVideoDetail]);

  useEffect(() => {
    handleFetchVideoDetail();
  }, [handleFetchVideoDetail]);

  const isFavorVideo = useMemo(() => {
    if (isAuthenticated) {
      return favorites && favorites.length > 0
        ? favorites.some((v) => v.id.videoId === videoId)
        : false;
    }
    return false;
  }, [isAuthenticated, videoId, favorites]);

  const handleFavoriteVideo = () => {
    if (isFavorVideo) {
      return handleRemoveFromFavorites(videoId);
    }
    const data = { ...video, id: { videoId } };
    return handleAddToFavorites(data);
  };

  return (
    <Styled.WatchPageContainer>
      {!isLoading ? (
        <>
          <section className="watch-section">
            {video && (
              <VideoDetail
                video={video}
                videoId={videoId}
                isAuthenticated={isAuthenticated}
                isFavorVideo={isFavorVideo}
                handleFavoriteVideo={handleFavoriteVideo}
              />
            )}
          </section>
          <section className="list-section">
            <GridVideo videos={favorites} pathname="/favorite/watch" vertical />
          </section>
        </>
      ) : (
        <Loading />
      )}
    </Styled.WatchPageContainer>
  );
};

export default withPageLayout(FavoriteWatch);
