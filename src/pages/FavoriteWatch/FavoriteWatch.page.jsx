import React, { useCallback, useMemo } from 'react';

import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../providers/Auth';

import Styled from '../Watch/Watch.styled';
import Loading from '../../components/Common/Loading';
import GridVideo from '../../components/GridVideo';
import VideoDetail from '../../components/VideoDetail/VideoDetail.component';

import { withPageLayout } from '../../components/Layout';

const FavoriteWatch = () => {
  const { search } = useLocation();

  const {
    authState: { favorites, video, isLoading, isAuthenticated },
    authActions: { handleAddToFavorites, handleRemoveFromFavorites },
  } = useAuthContext();

  const videoId = useMemo(() => {
    const id = search.replace('?v=', '');

    return id;
  }, [search]);

  const isFavorVideo = useMemo(() => {
    if (isAuthenticated) {
      return favorites ? favorites.some((v) => v.id.videoId === video.id.videoId) : false;
    }
    return false;
  }, [isAuthenticated, favorites, video]);

  const handleFavoriteVideo = useCallback(
    (data) => {
      if (isFavorVideo) {
        return handleRemoveFromFavorites(data.id.videoId);
      }
      return handleAddToFavorites(data);
    },
    [isFavorVideo, handleAddToFavorites, handleRemoveFromFavorites]
  );

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
            {favorites && (
              <GridVideo videos={favorites} pathname="/favorite/watch" vertical />
            )}
          </section>
        </>
      ) : (
        <Loading />
      )}
    </Styled.WatchPageContainer>
  );
};

export default withPageLayout(FavoriteWatch);
