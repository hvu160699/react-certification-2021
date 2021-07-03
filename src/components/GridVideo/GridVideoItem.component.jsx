import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { GridVideoItem } from './GridVideo.styled';

const VideoItem = ({ video, vertical }) => {
  const { snippet } = video;
  return (
    <GridVideoItem vertical={vertical}>
      <div className="thumbnail">
        <picture className="img-wrapper">
          <source srcSet={snippet.thumbnails.high.url} media="(min-width: 1023.98px)" />
          <img loading="lazy" src={snippet.thumbnails.medium.url} alt={snippet.title} />
        </picture>
      </div>
      <div className="content">
        <h3>
          <span>{snippet.title}</span>
        </h3>
        <div className="statistics">
          <div className="row">
            <span>{snippet.channelTitle}</span>
          </div>
        </div>
      </div>
    </GridVideoItem>
  );
};

VideoItem.propTypes = {
  video: PropTypes.objectOf(PropTypes.any).isRequired,
  vertical: PropTypes.bool,
};

VideoItem.defaultProps = {
  vertical: false,
};

export default memo(VideoItem);
