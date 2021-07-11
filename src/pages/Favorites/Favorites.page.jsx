import React from 'react';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';
import Loading from '../../components/Common/Loading';

import { useVideoContext } from '../../providers/Video';
import { withPageLayout } from '../../components/Layout';

const FavoritesPage = () => {
  const {
    authState: { videos, isLoading },
  } = useVideoContext();

  return (
    <Container className="mx-auto">
      {!isLoading ? (
        videos && <GridVideo videos={videos} pathname="/favorites/watch" />
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default withPageLayout(FavoritesPage);
