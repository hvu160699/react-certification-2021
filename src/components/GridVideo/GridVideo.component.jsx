import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import VideoItem from './VideoItem';

const GridVideoContainer = styled.div`
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const GridVideo = ({ videos }) => {
  return (
    <GridVideoContainer>
      {videos && videos.length > 0 ? (
        videos.map((item) => <VideoItem key={item.etag} video={item.snippet} />)
      ) : (
        <div>No result</div>
      )}
    </GridVideoContainer>
  );
};

GridVideo.defaultProps = {
  videos: PropTypes.array.isRequired,
};

export default GridVideo;
