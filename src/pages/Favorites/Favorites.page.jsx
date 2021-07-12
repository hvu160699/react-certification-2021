import React from 'react';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';
import Loading from '../../components/Common/Loading';

import { withPageLayout } from '../../components/Layout';
import { useAuthContext } from '../../providers/Auth';

const FavoritesPage = () => {
  const {
    authState: { favorites, isLoading },
  } = useAuthContext();

  return (
    <Container className="mx-auto">
      {!isLoading ? (
        favorites && <GridVideo videos={favorites} pathname="/favorites/watch" />
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default withPageLayout(FavoritesPage);
