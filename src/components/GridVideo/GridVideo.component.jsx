import React from 'react';
import PropTypes from 'prop-types';

import VideoItem from './GridVideoItem.component';

import { GridVideoContainer } from './GridVideo.styled';

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

GridVideo.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridVideo;
