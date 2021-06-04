import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { $getVideos } from '../../api/videos';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';

const HomePageContainer = styled(Container)`
  margin: auto;
`;

const HomePage = () => {
  const [state, setState] = useState({
    isLoading: true,
    videos: [],
  });

  const fetchVideos = useCallback(async () => {
    try {
      const res = await $getVideos();

      if (res.items) {
        setState((prev) => ({ ...prev, isLoading: false, videos: res.items }));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <HomePageContainer>
      <GridVideo videos={state.videos} />
    </HomePageContainer>
  );
};

export default HomePage;
