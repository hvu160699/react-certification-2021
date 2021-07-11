import React, { useMemo } from 'react';

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
    authState: { videos, video, isLoading },
    authActions: { handleAddToFavorites },
  } = useAuthContext();

  const videoId = useMemo(() => {
    const id = search.replace('?v=', '');

    return id;
  }, [search]);

  return (
    <Styled.WatchPageContainer>
      {!isLoading ? (
        <>
          <section className="watch-section">
            {video && (
              <VideoDetail
                video={video}
                videoId={videoId}
                isAuthenticated
                handleAddToFavorites={handleAddToFavorites}
              />
            )}
          </section>
          <section className="list-section">
            {videos && <GridVideo videos={videos} pathname="/favorite/watch" vertical />}
          </section>
        </>
      ) : (
        <Loading />
      )}
    </Styled.WatchPageContainer>
  );
};

export default withPageLayout(FavoriteWatch);
