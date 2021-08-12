import React from 'react';
import PropTypes from 'prop-types';

import VideoItem from './GridVideoItem.component';

import Link from '../Common/Link';

import { GridVideoContainer } from './GridVideo.styled';

const GridVideo = ({ videos, vertical, pathname }) => {
  return (
    <GridVideoContainer vertical={vertical}>
      {videos && videos.length > 0 ? (
        videos.map((video) => (
          <Link key={video.etag} to={`${pathname}?v=${video.id.videoId}`} role="link">
            <VideoItem video={video} vertical={vertical} />
          </Link>
        ))
      ) : (
        <div>No videos found</div>
      )}
    </GridVideoContainer>
  );
};

GridVideo.propTypes = {
  vertical: PropTypes.bool,
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string,
};

GridVideo.defaultProps = {
  vertical: false,
  pathname: '/watch',
};

export default GridVideo;
