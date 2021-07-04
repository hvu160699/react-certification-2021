import React from 'react';
import PropTypes from 'prop-types';

import VideoItem from './GridVideoItem.component';

import Link from '../Common/Link';

import { GridVideoContainer } from './GridVideo.styled';

const GridVideo = ({ videos, vertical }) => {
  return (
    <GridVideoContainer vertical={vertical}>
      {videos && videos.length > 0 ? (
        videos.map((video) => (
          <Link key={video.etag} to={`/watch?v=${video.id.videoId}`} role="link">
            <VideoItem video={video} vertical={vertical} />
          </Link>
        ))
      ) : (
        <div>No result</div>
      )}
    </GridVideoContainer>
  );
};

GridVideo.propTypes = {
  vertical: PropTypes.bool,
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

GridVideo.defaultProps = {
  vertical: false,
};

export default GridVideo;
