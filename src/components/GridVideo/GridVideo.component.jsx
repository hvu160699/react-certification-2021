import React from 'react';
import PropTypes from 'prop-types';

import VideoItem from './GridVideoItem.component';

import Link from '../Common/Link';

import { GridVideoContainer } from './GridVideo.styled';

const GridVideo = ({ videos, handleSelect }) => {
  return (
    <GridVideoContainer>
      {videos && videos.length > 0 ? (
        videos.map((video) => (
          <Link
            key={video.etag}
            to={`/watch?v=${video.id.videoId}`}
            role="button"
            onClick={() => handleSelect(video.id.videoId)}
          >
            <VideoItem video={video.snippet} />
          </Link>
        ))
      ) : (
        <div>No result</div>
      )}
    </GridVideoContainer>
  );
};

GridVideo.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default GridVideo;
